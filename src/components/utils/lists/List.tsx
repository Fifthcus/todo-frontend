import React, {useState, useEffect} from 'react'
import Task from './Task';
import { useList } from '../../../hooks/useList';
import useFetchList from "../../../hooks/useFetchList";

interface ComponentProps {
    username?: string,
}

const List = ({username}: ComponentProps) => {
    const { list, setList } = useList();
    const fetchedData = useFetchList();
    const fetchedList = fetchedData.list;
    if(list.length === 0){
        setList(fetchedList);
    }
    return (
        <>
            <h2 className="text-center text-2xl font-medium pb-10">{username}'s List</h2>
            <ul className='w-full'>
                {list.length !== 0 ? 
                    list.map(task => {
                        return <Task key={task.id} id={task.id} task={task}/>
                    }) : <p className='text-center'>Your list is empty :c</p>}
            </ul>
        </>
    );
}

export default List
