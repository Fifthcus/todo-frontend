import { createContext, useState } from "react";

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
    const [list, setList] = useState([{id: 1, isCompleted: true, task: "TASK 1"}, {id: 2, isCompleted: false, task: "TASK 2"}]);
    //Add a test to the todo list.
    const addTask = (userObj: {id: number, isCompleted: boolean, task: string}) => {
        setList([...list, {...userObj}]);
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