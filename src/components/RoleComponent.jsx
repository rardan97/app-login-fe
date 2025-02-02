import { useCallback, useEffect, useRef, useState } from "react";
import { createRole, deleteRole, getValueById, listRole, updateRole } from "../services/RoleService";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { MdBookmarkAdd } from "react-icons/md";
const RoleComponent = () => {
    const [isEdit, setIsEdit] = useState(false);
    const [roles, setRoles] = useState([]);
    const [roleId, setRoleId] = useState('');
    const [roleName, setRoleName] = useState('');
    const token = localStorage.getItem("accessToken");
    const [errors, setErrors] = useState({
      roleName:''
    });

    const hasFetched = useRef(false);


    const getListAllRole = useCallback(() => {
      if (token) {
        listRole(token)
          .then((response) => {
            setRoles(response.data);
            console.log("Success processing data");
          })
          .catch((error) => {
            console.log("Failed processing data", error);
          });
      }
    }, [token]);

   
  
    useEffect(() => {
      if (!hasFetched.current) {
        getListAllRole();
        hasFetched.current = true; // Cegah request kedua
      }
      
    }, [getListAllRole]);
  
    


  
    // function getListAllRole(){
    //   listRole(token).then((response) => {
    //     setRoles(response.data);
    //     console.log("Success proccess data");
    //   }).catch(error => {
    //     console.log("gagal proccess data");
    //     console.log(error);
    //   })
    // }

    function saveRole(e){
        e.preventDefault();
        console.log("proccess save");
        if(validateForm()){
          console.log("validation save");
          const roleData = {roleName}
          console.log("data roleData :"+roleData)
          createRole(token, roleData).then((response) => {
            console.log(response.data);
            getListAllRole();
          }).catch(error => {
            console.log(error);
          })
        }
      }
    
      function clearInput(){
        setRoleName('');
      }

    function openRoleEditModal(roleId){
        console.log(roleId);
        
        if(roleId){
            getValueById(token, roleId).then((response) => {
              setRoleId(response.data.roleId);
              setRoleName(response.data.roleName);
              setIsEdit(true);
            }).catch(error => {
                console.error(error); 
            })
        }
      }

      function editRole(e){
        e.preventDefault();
        if(validateForm()){
            const roleData = {roleName}
            const roleIdParam = roleId;
            updateRole(token, roleIdParam, roleData).then((response) => {
                console.log(response.data);
                getListAllRole();
                document.getElementById('closeModal').click();
                clearInput();
            }).catch(error => {
                console.log(error);
            })
        }
    }
    

      function delRole(roleId){
        deleteRole(token, roleId).then((response) => {
            console.log(response.data);
            getListAllRole();
        })
    }
    
    function validateForm(){
      console.log("proccess validation");
        let valid = true;
        const errorsCopy = {... errors}
        
        if(roleName.trim()){
            errorsCopy.roleName = '';
        }else{
            errorsCopy.roleName = 'roleName is required';
            valid = false;
        }
    
        
        setErrors(errorsCopy);
        return valid;
    }
    
    const resetForm = () => {
      setRoleId('');
      setRoleName('');
      setErrors({});
      setIsEdit(false);
    };
    
    
    const openAddModal = () => {
      resetForm();
      setIsEdit(false);
    };

  return (
    <>
     <div>
        <div>
        <div className='m-4'>
            <div className="container">
                <div className="card" >
                    <div className="card-body">
                        <div className="row justify-content-center">
                            <div className="col-sm-12">
                                <div className='my-4'>
                                    <button type="button" className="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={openAddModal}>
                                    <MdBookmarkAdd size={20}/>   Add Role 
                                    </button>
                                </div>
                                <table className="table ">
                                      <thead>
                                        <tr>
                                          <th>No</th>
                                          <th>Role ID</th>
                                          <th>Role Name</th>
                                          <th>Action</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                      {
                                      roles.map((role, index) => 
                                        <tr key={role.roleId}>
                                          <th>{index + 1}</th>
                                          <td>{role.roleId}</td>
                                          <td>{role.roleName}</td>
                                          <td>
                                            <div><button className='btn btn-success btn-sm mx-2'  onClick={() => openRoleEditModal(role.roleId)} data-bs-toggle="modal" data-bs-target="#exampleModal"><MdEdit size={20}/> Edit</button>
                                            <button className='btn btn-danger btn-sm' onClick={() => delRole(role.roleId)}><MdDelete size={20}/> Delete</button></div>
                                          </td>
                                        </tr>
                                        )
                                      }
                                     
                                      </tbody>
                                  </table>
                            </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">{isEdit ? 'Edit Role' : 'Add Role'}</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <form>
                      <input 
                                type="hidden" 
                                name='roleId'
                                value={roleId}
                                onChange={(e) => setRoleId(e.target.value)} 
                            />
                        <div className="mb-3">
                            <label className="form-label">Role Name</label>
                            <input 
                              type="text" 
                              className="form-control" 
                              id="roleName" 
                              value={roleName}
                              onChange={(e) => setRoleName(e.target.value)}
                            />
                            {errors.roleName && <div className='invalid-feedback'>{errors.roleName}</div>}
                        </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="submit" className="btn btn-primary" onClick={isEdit ? editRole : saveRole}>{isEdit ? 'Update' : 'Save'}</button>
                </div>
                </div>
            </div>
        </div>
        </div>
    </div>
    </>
    
  )
}

export default RoleComponent
