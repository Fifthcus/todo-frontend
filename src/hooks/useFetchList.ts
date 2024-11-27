import { useState, useEffect } from "react";
import { useAuth } from '../hooks/useAuth';

interface ListItemObject {
    id: number,
    iscompleted: boolean,
    task: string,
}

const useFetchList = () => {
    const { user } = useAuth();
    const id = user?.id;
    const [data, setData] = useState<ListItemObject[]>([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = `http://localhost:3000/api/v1/list/${id}`;
                const response = await fetch(url, {
                    credentials: "include"
                });
                const json = await response.json();
                setData(json.list);
            } catch(error: any) {
                console.log(error);
                setError(error);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    },[]);
    return { data, error, loading };
}

export default useFetchList;