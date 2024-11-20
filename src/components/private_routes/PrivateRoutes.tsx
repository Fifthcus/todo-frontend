import React from 'react'
import { Navigate} from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

interface PrivateRoutesProps {
    children: React.ReactNode;
}

const PrivateRoutes = ({ children }: PrivateRoutesProps) => {
    const { isAuth } = useAuth();
    if(!isAuth) {
        <Navigate to="/"/>
    } else {
        return children;
    }
}

export default PrivateRoutes
