
import { useContext, useEffect, useState } from 'react';
import { Navigate } from 'react-router';
import { refreshtoken } from '../services/AuthService';
import { AuthContext } from '../utils/AuthProvider';


const AuthMiddleware = ({ children }) => {
    const {accessToken, setAccessToken} = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const checkSession = async () => {
        try {
            console.log("AuthMiddleware Token:", accessToken);
            let refreshToken = localStorage.getItem("refreshToken");

            if (refreshToken) {
            const response = await refreshtoken(refreshToken);
            if (response.status === 200) {
                console.log("middleware : "+response);
                
                localStorage.setItem("accessToken", response.data.accessToken);
                setAccessToken(response.data.accessToken);
                setIsAuthenticated(true);
            } else {
                localStorage.removeItem("accessToken");
                localStorage.removeItem("refreshToken");
                setAccessToken(null);
                setIsAuthenticated(false);
            }
            } else {
                setAccessToken(null);
                setIsAuthenticated(false);
                console.log("Token null"); 
            }
        } catch (error) {
            console.error("Error checking session:", error);
            setAccessToken(null);
            setIsAuthenticated(false);
        } finally {
            setIsLoading(false);
        }
        };
        checkSession();
    }, []);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }
    return children;
}

export default AuthMiddleware

