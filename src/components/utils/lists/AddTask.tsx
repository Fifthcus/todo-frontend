import React, { Dispatch, SetStateAction, useState }  from 'react';

const AddTask = ({list, setList}: any) => {
    const [taskInput, setTaskInput] = useState("");
    const handleTaskInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTaskInput(event.target.value);
    }
    const handleClick = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const id_of_last_index = list[list.length - 1].id;
        if(!id_of_last_index){
            setList({id: 1, list_item: taskInput});
        }
        setList([...list, {id: id_of_last_index + 1, list_item: taskInput}]);
        setTaskInput("");
    };
  return (
    <form className="flex flex-col md:flex-row items-center gap-2.5 w-full" onSubmit={handleClick}>
        <input type="text" name="list_text" onChange={handleTaskInputChange} value={taskInput} className="py-2.5 w-full border-2 border-gray-500 rounded-lg" placeholder="Enter a task." />
        <button className='w-full md:w-5/12 lg:w-4/12 text-neutral-50 bg-pastel-purple border-2 border-pastel-purple rounded-lg py-2.5'>Add Task</button>
    </form>
  )
};

export default AddTask;