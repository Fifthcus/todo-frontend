import React from 'react'
import Task from './Task';
import { useList } from '../../../hooks/useList';

interface ComponentProps {
    user: string,
}

const List = ({user}: ComponentProps) => {
    const { list } = useList();
    return (
        <>
            <h2 className="text-center text-2xl font-medium pb-10">{user}'s List</h2>
            <ul className='w-full' data-testid="task-list">
                {list.map(item => {
                    return <Task key={item.id} id={item.id} item={item}/>
                })}
            </ul>
        </>
    );
}

export default List
