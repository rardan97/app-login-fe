import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getRoleAll, signup } from '../services/AuthService';

const RegisterComponents = () => {
const [userFullName, setUserFullName] = useState('');
const [userName, setUserName] = useState('');
const [userPassword, setUserPassword] = useState('');
const [userRole, setUserRole] = useState('');
const [roles, setRoles] = useState([]);
const [alertMessage, setAlertMessage] = useState("");
const [alertType, setAlertType] = useState("");
const [errors, setErrors] = useState({
    userFullName:'',
    userName:'',
    userPassword:'',
    userRole:''
    });

useEffect(() => {
    getListAllRole();
    }, []);

    const showAlert = (message, type) => {
        setAlertMessage(message);
        setAlertType(type);
        setTimeout(() => {
            setAlertMessage("");
            setAlertType("");
          }, 5000); // Hilang otomatis setelah 5 detik
      };

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
    if(validateForm()){
        const userData = {userFullName:userFullName, username:userName, password:userPassword, role:userRole}
        console.log("data todo :"+userData)
        signup(userData).then((response) => {

            showAlert("Login Success", "success")
            console.log(response.data);
        // getListAllTodo();
        }).catch(error => {
            
        console.log(error);
        showAlert("Login Failed", "failed")
        })
    }
    }


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

        if (!userRole || userRole === "") {
            errorsCopy.userRole = "Please select a valid role.";
            valid = false;
            }else{
            errorsCopy.userRole = '';   
        }    
        setErrors(errorsCopy);
        return valid;
    }
    
    return (
    <>
    <div>
    {alertMessage && (
        // <div className={`alert ${alertType === "success" ? "alert-success" : "alert-danger"}`} role="alert">
        <div
            style={{
            background: alertType === "success" ? "green" : "red",
            color: "white",
            padding: "10px",
            }}
        >
        {/* <div style={{ background: "red", color: "white", padding: "10px" }}> */}
          {alertMessage}
        </div>
      )}
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
