import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { signout } from "../services/AuthService";

const LogoutComponent = () => {
    const navigate = useNavigate();

    useEffect(() => {
        logout();
    });

    function logout() {
        console.log("process save");
        let token = localStorage.getItem("accessToken");
        signout(token).then((response) => {
            console.log(response.data);
            console.log("success logout")
            localStorage.removeItem("accessToken");
            localStorage.removeItem("refreshToken");
            navigate('/login');
        }).catch(error => {
            console.log(error);
        })
    }

    return (
        <div>
            <div>Logging out...</div>
        </div>
    )
}

export default LogoutComponent