import { Route, Routes } from 'react-router-dom'
import './App.css'

import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import RolePage from './pages/RolePage'
import ProfilePage from './pages/ProfilePage'
import AuthMiddleware from './middleware/AuthMiddleware'
import {AuthProvider} from './utils/AuthProvider'
import ProtectedRoute from './utils/ProtectedRoute'
import Unauthorized from './pages/Unauthorized'
import LogoutComponent from './components/LogoutComponent'
import UserPage from './pages/UserPage'

function App() {
    return (
    <AuthProvider>
        <Routes>
            <Route path='/' element={<LoginPage />}></Route>
            <Route path='/login' element={<LoginPage />}></Route>
            <Route path='/register' element={<RegisterPage />}></Route>
            <Route path='/logout' element={<LogoutComponent />}></Route>
            <Route path="/unauthorized" element={<Unauthorized />} />
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
            <Route path="/role" element={
                <AuthMiddleware>
                    <ProtectedRoute allowedRoles={["ROLE_ADMIN"]}>
                        <RolePage />
                    </ProtectedRoute>
                </AuthMiddleware>
            }></Route>
                <Route path="/user" element={
                <AuthMiddleware>
                    <ProtectedRoute allowedRoles={["ROLE_ADMIN"]}>
                        <UserPage />
                    </ProtectedRoute>
                </AuthMiddleware>
            }></Route>
        </Routes>
    </AuthProvider>
    )
}

export default App