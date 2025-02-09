import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";

const ProtectedRoute = ({ allowedRoles, children }) => {
    const { user } = useContext(AuthContext);

    console.log("roleParam : "+allowedRoles);
    console.log("role : "+user.roles[0]);
    if (!user) return <Navigate to="/login" replace />;
    // if (!allowedRoles.includes(user.roles[0])) return <Navigate to="/unauthorized" replace />;
    if (!allowedRoles.includes(user.roles[0])) {
        console.log("Access Denied! Redirecting...");
        return <Navigate to="/unauthorized" />;
    }

    console.log("Access Granted!");
    return children;


    // return <Outlet />;
};

export default ProtectedRoute;