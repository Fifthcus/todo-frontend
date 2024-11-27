import { useEffect, useState } from "react";
import { useAuth } from "./useAuth";

const usePersistUser = () => {
    const { login } = useAuth();
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    useEffect(() => {
        const fetchUser = async () => {
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
                setData(json.json);
                if(response.ok){
                    login(json.user);
                };
            } catch(error: any) {
                console.error(error);
                setError(error);
            } finally {
                setLoading(false);
            }
        }
        fetchUser();
    },[]);
    return { data, loading, error };
}

export default usePersistUser;