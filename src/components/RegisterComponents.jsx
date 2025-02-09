import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getRoleAll, signup } from '../services/AuthService';

const RegisterComponents = () => {
    const [userFullName, setUserFullName] = useState('');
    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [userRole, setUserRole] = useState('');
    const [roles, setRoles] = useState([]);

    const [errors, setErrors] = useState({
        userFullName:'',
        userName:'',
        userPassword:'',
        userRole:''
      });


    // const roles = ["Admin", "User", "Editor", "Viewer"];

    useEffect(() => {
        getListAllRole();
      }, []);

    const handleChange = (event) => {
        console.log("select :"+ event.target.value)
        setUserRole(event.target.value);
      };

    function getListAllRole(){
        getRoleAll().then((response) => {
            console.log(response);
            setRoles(response.data);
        }).catch(error => {
          console.log(error);
        })
    }


    function saveUser(e){
        e.preventDefault();
        console.log("proccess save");
        // if(validateForm()){
          console.log("validation save");
          console.log("userFullName : "+userFullName);
          console.log("userName : "+userName);
          console.log("userPassword : "+userPassword);
          console.log("userRole : "+userRole);
          
          const username = userName;
          const password = userPassword;
          const role = userRole;
          const userData = {userFullName, username, password, role}
          console.log("data todo :"+userData)
          signup(userData).then((response) => {
            console.log(response.data);
            // getListAllTodo();
          }).catch(error => {
            console.log(error);
          })
        // }
      }

    //   function clearInput(){
    //     setUserFullName('');
    //     setUserName('');
    //     setUserPassword('');
    //     setUserRole('');
    //   }


        function validateForm(){
            console.log("proccess validation");
            let valid = true;
            const errorsCopy = {... errors}
          
            if(userFullName.trim()){
                errorsCopy.userFullName = '';
            }else{
                errorsCopy.userFullName = 'userFullName is required';
                valid = false;
            }
      
            if(userName.trim()){
                errorsCopy.userName = '';
            }else{
                errorsCopy.userName = 'userName is required';
                valid = false;
            }

            if(userPassword.trim()){
                errorsCopy.userPassword = '';
            }else{
                errorsCopy.userPassword = 'userPassword is required';
                valid = false;
            }

            if(userRole.trim()){
                errorsCopy.userRole = '';
            }else{
                errorsCopy.userRole = 'userRole is required';
                valid = false;
            }

            
      
          
            setErrors(errorsCopy);
            return valid;
        }
      


    return (
    <>
    <div>
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-xl-5 col-lg-5 col-md-8 col-sm-12'>
                    <div className='card card-custome' style={{backgroundColor: "rgba(138, 194, 204, 0.06)"}}>
                        <div className='card-body'> 
                            <div className='content-auth'>
                                <div className='text-center'>
                                    <h4>Register</h4> 
                                </div>
                                <div className='auth'>
                                    <form>
                                        <div className="mb-3">
                                            <label className="form-label">Full Name</label>
                                            <input 
                                                type="text" 
                                                className="form-control" 
                                                id="fullName" 
                                                onChange={(e) => setUserFullName(e.target.value)}
                                                style={{backgroundColor: "rgba(28, 53, 32, 0.08)"}} 
                                                />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Username</label>
                                            <input 
                                                type="text" 
                                                className="form-control" 
                                                id="userName" 
                                                onChange={(e) => setUserName(e.target.value)}
                                                style={{backgroundColor: "rgba(28, 53, 32, 0.08)"}} 
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Password</label>
                                            <input 
                                                type="password" 
                                                className="form-control" 
                                                id="password" 
                                                onChange={(e) => setUserPassword(e.target.value)}
                                                style={{backgroundColor: "rgba(28, 53, 32, 0.08)"}}
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Role</label>
                                            <select 
                                                className="form-select" 
                                                aria-label="Default select example"  
                                                value={userRole} 
                                                onChange={handleChange}>
                                            <option value="">-- Choose a Role --</option>
                                            {roles.map((role, index) => (
                                            <option key={index} value={role.roleId}>
                                                {role.roleName}
                                            </option>
                                            ))}
                                            </select>
                                        </div>
                                        {/* <button type="submit" className="btn btn-primary w-100">Register</button> */}
                                        <button type="submit" className="btn btn-primary w-100" onClick={saveUser}>Register</button>
                                    </form>

                                    <div className='text-center mt-4'>
                                        <span >Already have an account <Link to="/login"> Login</Link></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>   
                </div>
            </div>
        </div>
    </div>
    </>
    )
}

export default RegisterComponents
