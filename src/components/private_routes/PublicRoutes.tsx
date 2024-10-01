import React from 'react'
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const PublicRoutes = ({children}: any) => {
    const {user} = useAuth();
    return user ? <Navigate to="/dashboard" /> : children;
}

export default PublicRoutes
