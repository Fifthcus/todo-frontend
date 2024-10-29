import React, { useState } from 'react'
import Circle from './Circle'
import More from '../../../assets/icons/more_vert_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg'
import ListMoreOptions from './ListMoreOptions';
import { useList } from '../../../hooks/useList'

interface ListItemProps {
    item: any,
    id: number,
}

const ListItem = ({item, id}: ListItemProps) => {
    const { list, updateTask } = useList();
    const [moreOptions, setMoreOptions] = useState(false);
    const [editTask, setEditTask] = useState(false);
    const [editTaskText, setEditTaskText] = useState("");
    const displayMoreOptions = (event: React.MouseEvent) => {
        event.stopPropagation();
        setMoreOptions(true);
    }
    const closeMoreOptions = () => {
        setMoreOptions(false);
    }
    const changeEditTaskText = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEditTaskText(event.target.value);
    }
    const openInputToUpdateTask = (event: React.FormEvent) => {
        event.preventDefault();
        setEditTask(true);
    }
    const updateTaskFromInput = (event: React.FormEvent, id: number) => {
        event.preventDefault();
        const newList = list.map((task) => {
            if(task.id === id) return {...task, list_item: editTaskText}
            return task;
        });
        console.log(newList);
        updateTask(newList);
        setEditTask(false);
        closeMoreOptions();
    }
    return (
    <li className="flex items-center w-full py-2">
        <Circle />
        {editTask ? 
        <form className="flex-grow text-xl px-8 flex gap-2.5" onSubmit={(event) => updateTaskFromInput(event, id)}>
            <input className="flex-grow text-lg border-2 border-gray-500 rounded-lg pl-2" value={editTaskText} onChange={changeEditTaskText} type="text" placeholder='Update task...'/>
            <button className='text-neutral-50 bg-pastel-purple border-2 border-pastel-purple rounded-lg py-0.5 px-5'>Submit</button>
        </form>
        : null}
        {editTask ? null : <p className='flex-grow text-xl pl-5'>{item.list_item}</p>}
        {moreOptions ? <ListMoreOptions handleClick={closeMoreOptions} openInputToUpdateTask={openInputToUpdateTask} setEditTask={setEditTask} id={id} /> :
        <img onClick={(event) => displayMoreOptions(event)} className="cursor-pointer p-2" src={More} alt="Three vertical dots." />
        }
    </li>)
}

export default ListItem
