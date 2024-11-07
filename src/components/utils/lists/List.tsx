import React from 'react'
import Task from './Task';
import { useList } from '../../../hooks/useList';

interface ComponentProps {
    username?: string,
}

const List = ({username}: ComponentProps) => {
    const { list } = useList();
    return (
        <>
            <h2 className="text-center text-2xl font-medium pb-10">{username}'s List</h2>
            <ul className='w-full' data-testid="task-list">
                {list.map(task => {
                    return <Task key={task.id} id={task.id} task={task}/>
                })}
            </ul>
        </>
    );
}

export default List
