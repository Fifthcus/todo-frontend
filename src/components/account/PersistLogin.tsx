import { useEffect, useState } from 'react'
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from "react-router-dom";

interface PersistLoginProps {
    children?: JSX.Element
}

const PersistLogin = ({ children }: PersistLoginProps) => {
    const [isLoading, setIsLoading] = useState(true);
    const { login, isAuth } = useAuth();
    const navigate = useNavigate();

    //Prevent user from visiting dashboard component while not authenticated.
    useEffect(() => {
        if (!isAuth) {
          console.log(`isAuth: ${isAuth}`);
          navigate("../");
        }
      }, [isAuth]);
    //Verify refresh token
    useEffect(() => {
        const verifyRefreshToken = async () => {
            try {
                const response = await fetch("http://localhost:3000/user/persist", {
                    method: "POST",
                    credentials: "include",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ persist: true }),
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
            { isLoading ? "Loading..." : isAuth ? children : navigate("/") }
        </>
    )
}

export default PersistLogin
