import { createContext, useEffect, useState } from "react";
import useFetchList from "../hooks/useFetchList";

interface SetListObj {
    list: TaskObject[],
    setList: ([]: TaskObject[]) => void,
    addTask: (userObj: TaskObject) => void,
    deleteTask: (id: number) => void,
    updateTask: (id: number, newList: TaskObject[], task: TaskObject, whatIsBeingUpdated: string) => void,
}
interface TaskObject {
    id: number,
    iscompleted: boolean,
    task: string,
}
interface SetListProps {
    children: React.ReactNode,
}

export const SetListContext = createContext<SetListObj | undefined>(undefined);

export const SetListProvider: React.FC<SetListProps> = (props) => {
    const { data } = useFetchList();
    const [list, setList] = useState<TaskObject[]>([]);
    useEffect(() => {
        setList(data);
    },[data]);
    //Add a test to the todo list.
    const addTask = (taskObj: TaskObject) => {
        setList([...list, taskObj]);
    }
    //With the filter method, delete a task from the todo list.
    const deleteTask = async (id: number) => {
        const filteredList = list.filter((task) => task.id !== id);
        try {
            await fetch(`http://localhost:3000/api/v1/list/task/${id}`, {
                method: "DELETE",
                credentials: "include",
            });
            setList(filteredList);
        } catch(error) {
            console.error(error);
            setList(list);
        }
    }
    //Update task from user provided input.
    const updateTask = async (id: number, newList: TaskObject[], task: TaskObject, whatIsBeingUpdated: string) => {
        try {
            console.log(task);
            await fetch(`http://localhost:3000/api/v1/list/task/${id}`, {
                method: "PUT",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ task, whatIsBeingUpdated }),
            });
            setList(newList);
        } catch(error) {
            console.error(error);
            setList(list);
        }
    }
    return(
        <SetListContext.Provider value={{ list, setList, addTask, deleteTask, updateTask }}>
            {props.children}
        </SetListContext.Provider>
    );
}