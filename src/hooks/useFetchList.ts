import { useState, useEffect } from "react";

const useFetchList = () => {
    const [list, setList] = useState<[]>([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = `http://localhost:3000/api/list`;
                const response = await fetch(url);
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