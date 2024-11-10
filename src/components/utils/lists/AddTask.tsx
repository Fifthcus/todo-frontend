import React, { useState }  from 'react';
import { useAuth } from '../../../hooks/useAuth';
import { useList } from '../../../hooks/useList';

const AddTask = () => {
    const { user } = useAuth();
    const id = user!.id;
    const { list, setList, addTask } = useList();
    const [taskInput, setTaskInput] = useState("");
    const handleTaskInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTaskInput(event.target.value);
    }
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(list.length === 0){
            addTask({id: 1, isCompleted: false, task: taskInput});
            setTaskInput("");
        }
        if(list.length >= 1){
            const id_of_last_index = list[list.length - 1].id;
            addTask({id: id_of_last_index + 1, isCompleted: false, task: taskInput});
            setTaskInput("");
        }
        try {
            const url = `http://localhost:3000/api/v1/list/task`;
            const response = await fetch(url, {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({user:{ id }, isCompleted: false, task: taskInput})
            })
            if(!response.ok){
                window.setTimeout(() => {
                    setList(list);
                }, 2000);
            }
        } catch(err) {
            console.error(err);
            window.setTimeout(() => {
                setList(list);
            }, 2000);
        }
    };
  return (
    <form className="flex flex-col md:flex-row items-center gap-2.5 w-full" onSubmit={handleSubmit}>
        <input type="text" name="list_text" onChange={handleTaskInputChange} value={taskInput} className="py-2.5 pl-2 w-full border-2 border-gray-500 rounded-lg" placeholder="Enter a task."/>
        <button className='w-full md:w-5/12 lg:w-4/12 text-neutral-50 bg-pastel-purple border-2 border-pastel-purple rounded-lg py-2.5'>Add Task</button>
    </form>
  )
};

export default AddTask;