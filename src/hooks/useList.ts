import { useContext } from "react";
import { SetListContext } from '../contexts/SetListContext';
export const useList = () => {
    const listContext = useContext(SetListContext);
    if(!listContext) throw new Error("Cannot retrieve your todo list.");
    return listContext;
}