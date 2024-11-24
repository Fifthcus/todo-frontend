import { useNavigate } from "react-router-dom";
import { useAuth } from '../../hooks/useAuth'

interface RequireAuthProps {
    children?: JSX.Element,
}

const RequireAuth = ({ children }: RequireAuthProps) => {
    const { isAuth } = useAuth();
    const navigate = useNavigate();
    { isAuth ? children : navigate("/") }
}

export default RequireAuth
