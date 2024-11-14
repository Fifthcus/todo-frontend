import { useList } from '../../../hooks/useList';
import Task from './Task';

interface ComponentProps {
    username?: string,
}

const List = ({ username }: ComponentProps) => {
    const { list } = useList();
    return (
        <>
            <h2 className="text-center text-2xl font-medium pb-10">{username}'s List</h2>
            <ul className='w-full'>
                {list.length > 0 ? 
                    list.map(task => {
                        return <Task key={task.id} id={task.id} task={task}/>
                    }) : <p className='text-center'>Your list is empty :c</p>}
            </ul>
        </>
    );
}

export default List
