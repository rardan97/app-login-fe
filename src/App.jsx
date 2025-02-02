import { Route, Routes } from 'react-router-dom'
import './App.css'

import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import RolePage from './pages/RolePage'
import ProfilePage from './pages/ProfilePage'
import AuthMiddleware from './middleware/AuthMiddleware'
import {AuthProvider} from './utils/AuthProvider'
// import { useEffect, useState } from 'react'
// import { checkSessionToken } from './services/AuthService'



function App() {
  
  // const navigate = useNavigate();
  // const [sessionChecked, setSessionChecked] = useState(false); 

  // useEffect(() => {

  //   if (sessionChecked) return;

  //   const checkSession = async () => {
  //     try {
  //       let refreshToken = localStorage.getItem("refreshToken");
  //       console.log("refresh token: ", refreshToken);

  //       if (refreshToken) {
  //         const response = await checkSessionToken(refreshToken);
          
  //         if (response.status === 200) {
  //           localStorage.removeItem("accessToken");
  //           const data = response.data;
  //           console.log("Token refreshed: ", data);
  //           localStorage.setItem("accessToken", data.accessToken); // Menyimpan token
  //           // navigate("/home"); // Jika sukses, navigasi ke halaman home
  //           let refreshToken1 = localStorage.getItem("accessToken");
  //           console.log("Token refreshed update : ", refreshToken1);

  //           const currentPath = window.location.pathname;
  //           console.log("path: ", currentPath);
  //           navigate(currentPath);
  //           // if (currentPath !== '/home') {
  //           //   navigate("/home"); // Arahkan ke halaman home setelah token berhasil diperbarui
  //           // }
  //         } else {
  //           localStorage.removeItem("accessToken");
  //           localStorage.removeItem("refreshToken");
  //           navigate("/login"); // Jika sesi kadaluarsa, arahkan ke login
  //         }
  //       } else {
  //         navigate("/login"); // Jika tidak ada refresh token, arahkan ke login
  //       }
  //     } catch (error) {
  //       console.error("Error checking session:", error);
  //       navigate("/login"); // Jika error, arahkan ke login
  //     }finally {
  //       setSessionChecked(true); // Tandai bahwa session sudah diperiksa
  //     }
  //   };

  //   checkSession();  // Panggil fungsi untuk memeriksa sesi

  // }, [navigate, sessionChecked]);  // Dependency array untuk hanya memanggil sekali saat mount



  // eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbjEyMyIsImlhdCI6MTczODUyMzg2MCwiZXhwIjoxNzM4NTI3NDYwfQ.gIFQvltDMMABa-49i1PzvGuLJKVsKy-5XUmgTdgO19A

  return (

   <AuthProvider>
    <Routes>
        <Route path='/' element={<LoginPage />}></Route>
        <Route path='/login' element={<LoginPage />}></Route>
        <Route path='/register' element={<RegisterPage />}></Route>
        <Route path='/logout' element={<LoginPage />}></Route>
        <Route 
          path='/home' 
          element={
            <AuthMiddleware>
              <HomePage />
            </AuthMiddleware>
          }></Route>

        <Route 
          path='/profile' 
          element={
            <AuthMiddleware>
              <ProfilePage />
            </AuthMiddleware>
            
          }></Route>
        <Route 
          path='/role' 
          element={
            <AuthMiddleware>
              <RolePage />
            </AuthMiddleware>
          }></Route>
      </Routes>
    
   </AuthProvider>
      
  )
}

export default App