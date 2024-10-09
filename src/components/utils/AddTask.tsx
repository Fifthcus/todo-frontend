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
    };
  return (
    <form onSubmit={handleClick}>
        <input type="text" name="list_text" onChange={handleTaskInputChange} value={taskInput} placeholder="Enter a task." />
        <button>Add Task</button>
    </form>
  )
};

export default AddTask;