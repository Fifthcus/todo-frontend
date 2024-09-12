import { createContext, useState } from "react";

interface UserAuthObj {
    user: string,
    login: (email: string) => void,
    logout: () => void,
}
interface AuthProps {
    children: React.ReactNode,
}

export const AuthContext = createContext<UserAuthObj | undefined>(undefined);

export const AuthProvider: React.FC<AuthProps> = (props) => {
    const [user, setUser] = useState("");
    const login = (email: string) => {
        if(email){
            setUser(email);
        }
    }
    const logout = () => {
        setUser("");
    }
    return(
        <AuthContext.Provider value={{user, login, logout}}>
            {props.children}
        </AuthContext.Provider>
    );
}