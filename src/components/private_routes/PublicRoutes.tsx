import { useEffect } from "react";
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

interface PrivateRoutesProps {
    children: React.ReactNode;
}

const PublicRoutes = ({ children }: PrivateRoutesProps) => {
    const { login, isAuth } = useAuth();
    //Verify refresh token
    useEffect(() => {
        const verifyRefreshToken = async () => {
            try {
                const response = await fetch("http://localhost:3000/user/persist", {
                    method: "POST",
                    credentials: "include",
                });
                const json = await response.json();
                if(response.ok){
                    login(json.user);
                };
            } catch(error) {
                console.error(error);
            }
        }
        {!isAuth ? verifyRefreshToken() : null}
    },[]);
    if(isAuth) {
        return <Navigate to="/dashboard"/>
    } else {
        return children;
    }
}

export default PublicRoutes
