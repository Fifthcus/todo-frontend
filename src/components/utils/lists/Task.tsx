import React, { useState } from 'react'
import Circle from './Circle'
import More from '../../../assets/icons/more_vert_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg'
import TaskOptionsMenu from './TaskOptionsMenu';
import { useList } from '../../../hooks/useList'

interface TaskProps {
    task: any,
    id: number,
}

const Task = ({task, id}: TaskProps) => {
    //Get list and other related functionality.
    const { list, updateTask } = useList();
    //Open and close task options menu.
    const [isTaskOptionsMenuOpen, setIsTaskOptionsMenuOpen] = useState(false);
    const openCloseTaskOptionsMenu = (event: any, isOpen: boolean) => {    //event used to be annotated as 'event: React.MouseEvent'
        event.preventDefault();                                            //must change to 'event: any' because on line 41 event
        setIsTaskOptionsMenuOpen(isOpen);                                  //was annotated as React.FormEvent
    }
    //Open and close edit task menu, and actualy edit the task.
    const [openCloseEditTaskMenu, setOpenCloseEditTaskMenu] = useState(false);
    const [editTaskText, setEditTaskText] = useState("");
    const changeEditTaskText = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEditTaskText(event.target.value);
    }
    //Open and close input menu that enables the user to update a task.
    const openCloseUpdateTaskInput = (event: React.FormEvent, isOpen: boolean) => {
        event.preventDefault();
        setOpenCloseEditTaskMenu(isOpen);
    }
    //Update entire list with individual task edit, and then close task options menu.
    const updateTaskFromInput = (event: React.FormEvent, id: number) => {
        event.preventDefault();
        const newList = list.map((task) => {
            if(task.id === id) return {id: task.id, isCompleted: task.isCompleted, task: editTaskText}
            return task;
        });
        updateTask(newList);
        openCloseUpdateTaskInput(event, false); //Close edit task input menu
        openCloseTaskOptionsMenu(event, false);
    }
    //Update circle list on whether or not a task is complete
    const completeTask = (id: number, taskCompletionStatus: boolean) => {
        const newList = list.map((task) => {
            console.log(taskCompletionStatus);
            if(task.id === id) return {id: task.id, isCompleted: taskCompletionStatus, task: task.task}
            return task;
        });
        updateTask(newList);
    }
    return (
    <li className="flex items-center w-full py-2">
        <Circle task={task} completeTask={completeTask}/>
        {openCloseEditTaskMenu ? 
        <form className="flex-grow text-xl px-8 flex gap-2.5" onSubmit={(event) => updateTaskFromInput(event, id)}>
            <input className="flex-grow text-lg border-2 border-gray-500 rounded-lg pl-2" value={editTaskText} onChange={changeEditTaskText} type="text" placeholder='Update task...'/>
            <button className='text-neutral-50 bg-pastel-purple border-2 border-pastel-purple rounded-lg py-0.5 px-5'>Submit</button>
        </form> : null}
        {openCloseEditTaskMenu ? null : <p className='flex-grow text-xl pl-5'>{task.task}</p>}
        {isTaskOptionsMenuOpen ? <TaskOptionsMenu openCloseTaskOptionsMenu={openCloseTaskOptionsMenu} openCloseUpdateTaskInput={openCloseUpdateTaskInput} setEditTask={setOpenCloseEditTaskMenu} id={id} /> :
        <img onClick={(event) => openCloseTaskOptionsMenu(event, true)} className="cursor-pointer p-2" src={More} alt="Three vertical dots." />
        }
    </li>)
}
export default Task
