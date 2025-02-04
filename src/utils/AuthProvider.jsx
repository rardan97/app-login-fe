import { useState, useEffect } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [accessToken, setAccessToken] = useState(localStorage.getItem("accessToken") || "");
    const [user, setUser] = useState(null);
    useEffect(() => {
        const storedToken = localStorage.getItem("accessToken");
        if (storedToken) {
            try{
                setAccessToken(storedToken);
                const userTemp = localStorage.getItem("userData");
                if(userTemp){
                    const parsedUserTemp = JSON.parse(userTemp);
                    setUser({username: parsedUserTemp.userName, roles: parsedUserTemp.roles})
                } else{
                    console.log("user nullll");
                }
            } catch(error){
                console.error("Error token:", error);
                setUser(null);
                setAccessToken("");
                localStorage.removeItem("accessToken");
            } 
        }
    }, []);

    const updateToken = (newToken) => {
        if (!newToken) {
            setAccessToken("");
            setUser(null);
            localStorage.removeItem("accessToken");
        } else {
            try {
                setAccessToken(newToken);
                localStorage.setItem("accessToken", newToken);
                const userTemp = localStorage.getItem("userData");
                console.log("userTemp: "+userTemp);
                if(userTemp){
                    const parsedUserTemp = JSON.parse(userTemp);
                    console.log("userTemp Name 2: "+parsedUserTemp.userName);
                    console.log("userTemp Role 2: "+parsedUserTemp.roles);
                    setUser({username: parsedUserTemp.userName, roles: parsedUserTemp.roles})
                } else{
                    console.log("user nullll");
                }
            
            } catch (error) {
                console.error("Token update failed:", error);
                setUser(null);
            }
        }
    };

    return (
        <AuthContext.Provider value={{ accessToken, setAccessToken: updateToken, user, setUser }}>
        {children}
        </AuthContext.Provider>
    );
};
