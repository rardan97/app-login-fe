import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";

const ProtectedRoute = ({ allowedRoles }) => {
    const { user } = useContext(AuthContext);
    if (!user) return <Navigate to="/login" replace />;
    if (!allowedRoles.includes(user.roles[0])) return <Navigate to="/unauthorized" replace />;
    return <Outlet />;
};

export default ProtectedRoute;