import { useEffect, useState } from 'react'
import { useAuth } from '../../hooks/useAuth';
import { Outlet } from 'react-router-dom';

const PersistLogin = () => {
    const [isLoading, setIsLoading] = useState(true);
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
            finally {
                setIsLoading(false);
            } 
        }
        { !isAuth ? verifyRefreshToken() : setIsLoading(false) }
    },[]);
    return (
        <>
            { isLoading ? "Loading..." : <Outlet /> }
        </>
    )
}

export default PersistLogin
