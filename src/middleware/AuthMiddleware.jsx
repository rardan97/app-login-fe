
import { useContext, useEffect, useState } from 'react';
import { Navigate } from 'react-router';
import { checkSessionToken } from '../services/AuthService';
import { AuthContext } from '../utils/AuthProvider';


const AuthMiddleware = ({ children }) => {

  const {token, setToken} = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkSession = async () => {
      try {

        console.log("AuthMiddleware Token:", token); // Cek apakah token null atau masih ada
        console.log("AuthMiddleware children:", children); 
        let refreshToken = localStorage.getItem("refreshToken");

        if (refreshToken) {
          const response = await checkSessionToken(refreshToken);
          if (response.status === 200) {
            console.log("middleware : "+response);
            localStorage.setItem("accessToken", response.data.accessToken);
            setToken(response.data.accessToken); // Simpan ke context
            setIsAuthenticated(true);
          } else {
            localStorage.removeItem("accessToken");
            localStorage.removeItem("refreshToken");
            setToken(null);
            setIsAuthenticated(false);
          }
        } else {
          setToken(null);
          setIsAuthenticated(false);
          console.log("Token null"); 
        }
      } catch (error) {
        console.error("Error checking session:", error);
        setToken(null);
        setIsAuthenticated(false);
      } finally {
        setIsLoading(false);
      }
    };
    checkSession();
  }, [token, setToken, children]);

  if (isLoading) {
    return <p>Loading...</p>; // Bisa diganti dengan skeleton UI atau spinner
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  // return token ? children : <Navigate to="/login" />;
  return children;
}

export default AuthMiddleware

