
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { signin } from '../services/AuthService';

const LoginComponent = () => {
    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [errors, setErrors] = useState({
        userName:'',
        userPassword:''
    });

      async function loginAction(e) {
        e.preventDefault();
        console.log("process save");
        if (validateForm()) {
            console.log("validation save");
            const username = userName;
            const password = userPassword;
            const userDataLogin = { username, password };
            console.log("data userDataLogin:", userDataLogin);

            try {
                // Menggunakan async/await untuk menangani login
                const response = await signin(userDataLogin); // Menunggu hasil dari signin
                console.log(response);
                console.log(response.token);
                console.log("success login");

                // Simpan token di localStorage atau sessionStorage
                // localStorage.removeItem("accessToken");
                // localStorage.removeItem("refreshToken");
                localStorage.setItem("accessToken", response.token);  // Periksa keamanan penyimpanan token
                localStorage.setItem("refreshToken", response.refreshToken); 

                alert("Login berhasil!");
                window.location.href = "/home"; // Redirect ke halaman dashboard setelah login berhasil
            } catch (error) {
                console.error("Login failed:", error);
                alert("Login gagal. Periksa kembali username dan password.");
            }
        }
    }

      function validateForm(){
        console.log("proccess validation");
          let valid = true;
          const errorsCopy = {... errors}
          
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
                            <div className='text-center'>
                                    <h4>Login</h4> 
                                </div>
                                <div className='auth '>
                                    <form>
                                    
                                        <div className="mb-3">
                                            <label className="form-label">Username</label>
                                            
                                            <input 
                                                type="text" 
                                                className="form-control" 
                                                // value={userName}
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
                                                id="userPassword" 
                                                // value={userPassword}
                                                onChange={(e) => setUserPassword(e.target.value)}
                                                style={{backgroundColor: "rgba(28, 53, 32, 0.08)"}}
                                            />
                                        </div>

                                        <button type="submit" className="btn btn-primary w-100" onClick={loginAction}>Login</button>
                                      
                                    </form>
                                    <div className='text-center mt-4'>
                                        <span >Dont have an account  <Link to="/register"> Register</Link></span>
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

export default LoginComponent
