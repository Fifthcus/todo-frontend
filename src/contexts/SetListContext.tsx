import { createContext, useState } from "react";

interface SetListObj {
    list: ListItemObject[],
    initList: ([]: ListItemObject[]) => void
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
    const [list, setList] = useState<ListItemObject[]>([]);
    //Initial List
    const initList = (list: ListItemObject[]) => {
        setList(list);
    }
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
        <SetListContext.Provider value={{list, initList, addTask, deleteTask, updateTask}}>
            {props.children}
        </SetListContext.Provider>
    );
}