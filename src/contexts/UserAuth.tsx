import { createContext, useState } from "react";

interface UserAuthObj {
    user?: UserObj,
    login: ({}: UserObj) => void,
    logout: () => void,
    isAuth: boolean,
}
interface UserObj {
    id?: number,
    username?: string,
    email?: string
}
interface AuthProps {
    children: React.ReactNode,
}

export const AuthContext = createContext<UserAuthObj | undefined>(undefined);

export const AuthProvider: React.FC<AuthProps> = (props) => {
    const [user, setUser] = useState<UserObj>({});
    const login = (user: UserObj) => {
        if(user){
            setUser(user);
            setIsAuth(true);
        }
    }
    const logout = () => {
        setUser({});
        setIsAuth(false)
    }
    const [isAuth, setIsAuth] = useState(false);
    return(
        <AuthContext.Provider value={{user, login, logout, isAuth}}>
            {props.children}
        </AuthContext.Provider>
    );
}