import { useEffect } from 'react'
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from "react-router-dom";
import usePersistUser from '../../hooks/usePersistUser';

interface PersistLoginProps {
    children?: JSX.Element
}

const PersistLogin = ({ children }: PersistLoginProps) => {
    const { isAuth } = useAuth();
    const navigate = useNavigate();
    usePersistUser();
    //Prevent user from visiting dashboard component while not authenticated.
    useEffect(() => {
        if (!isAuth) {
          navigate("../");
        }
      }, []);
    return (
        <>
            { isAuth ? children : null }
        </>
    )
}

export default PersistLogin
