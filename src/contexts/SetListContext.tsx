import { createContext, useState, useEffect } from "react";
import useFetchList from "../hooks/useFetchList";

interface SetListObj {
    list: ListItemObject[],
    addTask: (userObj: ListItemObject) => void,
    deleteTask: (id: number) => void,
    updateTask: (newList: ListItemObject[]) => void,
}
interface ListItemObject {
    id: number,
    isCompleted: boolean,
    task: string,
}
interface SetListProps {
    children: React.ReactNode,
}

export const SetListContext = createContext<SetListObj | undefined>(undefined);

export const SetListProvider: React.FC<SetListProps> = (props) => {
    const fetchedData = useFetchList();
    const fetchedList = fetchedData.list;
    const [list, setList] = useState<ListItemObject[]>(fetchedList);
    //Add a test to the todo list.
    const addTask = (taskObj: ListItemObject) => {
        setList([...list, taskObj]);
    }
    //With the filter method, delete a task from the todo list.
    const deleteTask = (id: number) => {
        const filteredList = list.filter((task) => task.id !== id);
        setList(filteredList);
    }
    //Update task from user provided input.
    const updateTask = (newList: ListItemObject[]) => {
        setList(newList);
    }
    return(
        <SetListContext.Provider value={{list, addTask, deleteTask, updateTask}}>
            {props.children}
        </SetListContext.Provider>
    );
}