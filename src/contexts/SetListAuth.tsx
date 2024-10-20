import { createContext, useState } from "react";

interface SetListObj {
    list: ListItemObject[],
    setListNew: ({}: ListItemObject) => void,
}
interface ListItemObject {
    id: number,
    list_item: string,
}
interface SetListProps {
    children: React.ReactNode,
}

export const SetListContext = createContext<SetListObj | undefined>(undefined);

export const SetListProvider: React.FC<SetListProps> = (props) => {
    const [list, setList] = useState([{id: 1, list_item: "test"}]);
    const setListNew = (obj: ListItemObject) => {
        setList([...list, {...obj}]);
    }
    return(
        <SetListContext.Provider value={{list, setListNew}}>
            {props.children}
        </SetListContext.Provider>
    );
}