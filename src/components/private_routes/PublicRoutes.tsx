import { useEffect } from "react";
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import usePersistUser from "../../hooks/usePersistUser";

interface PrivateRoutesProps {
    children: React.ReactNode;
}

const PublicRoutes = ({ children }: PrivateRoutesProps) => {
    const { isAuth } = useAuth();
    //Verify refresh token
    usePersistUser();
    if(isAuth) {
        return <Navigate to="/dashboard"/>
    } else {
        return <>{ children }</>;
    }
}

export default PublicRoutes
