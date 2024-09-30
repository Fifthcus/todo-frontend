import { useContext } from "react";
import { AuthContext } from '../contexts/UserAuth';

export const useAuth = () => {
    //Consumes context in a custom hook to be used in components requiring that data.
    const authContext = useContext(AuthContext);
    if (!authContext) throw new Error("useContext must be used within an AuthProvider");
    return authContext;
}

