import { useState, useEffect } from "react";
// import {AuthContext} from "./AuthContext";
import { createContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("accessToken") || "");

  // Cek token saat aplikasi pertama kali dijalankan
  useEffect(() => {
    const storedToken = localStorage.getItem("accessToken");
    if (storedToken) {
        console.log("Check AuthProvider : "+storedToken);
      setToken(storedToken);
    }
  }, []);

  // Simpan token ke localStorage setiap kali token berubah
  const updateToken = (newToken) => {
    setToken(newToken);
    localStorage.setItem("accessToken", newToken);
  };

  return (
    <AuthContext.Provider value={{ token, setToken: updateToken }}>
      {children}
    </AuthContext.Provider>
  );
};

// const AuthContextExport = { AuthContext, AuthProvider };
// export { AuthProvider, AuthContext };