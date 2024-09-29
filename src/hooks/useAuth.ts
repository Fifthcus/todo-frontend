import { useContext } from "react";
import { AuthContext } from '../contexts/UserAuth';

export const useAuth = () => {
    return useContext(AuthContext);
}

