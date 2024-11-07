import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

interface PrivateRoutesProps {
    children: React.ReactNode;
}

const PrivateRoutes = ({children}: PrivateRoutesProps) => {
    const {isAuth} = useAuth();
    if(isAuth) {
        <Navigate to="../dashboard"/>
    } else if(!isAuth) {
        return 
    }
}

export default PrivateRoutes
