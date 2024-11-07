import { useState, useEffect } from "react";
import { useAuth } from '../hooks/useAuth';

interface ListItemObject {
    id: number,
    isCompleted: boolean,
    task: string,
}

const useFetchList = () => {
    const { user } = useAuth();
    const id = user?.id;
    const [list, setList] = useState<ListItemObject[]>([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = `http://localhost:3000/api/v1/list/task`;
                const response = await fetch(url, {
                    method: "POST",
                    credentials: "include",
                    headers:{
                        'Content-Type': 'application/json',
                    },
                });
                const json = await response.json();
                setList(json.list);
            } catch(error: any) {
                console.log(error);
                setError(error);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    },[]);
    return {list, error, loading};
}

export default useFetchList;