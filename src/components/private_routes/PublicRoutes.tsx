import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

interface PrivateRoutesProps {
    children: React.ReactNode;
}

const PublicRoutes = ({ children }: PrivateRoutesProps) => {
    const { isAuth } = useAuth();
    if(isAuth) {
        <Navigate to="../dashboard"/>
    } else {
        return children;
    }
}

export default PublicRoutes
