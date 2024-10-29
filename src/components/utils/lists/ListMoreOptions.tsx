import React from 'react'
import Edit from '../../../assets/icons/edit_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg'
import Delete from '../../../assets/icons/delete_24dp_EA3323_FILL0_wght400_GRAD0_opsz24.svg'
import Close from '../../../assets/icons/close_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg'
import { useList } from '../../../hooks/useList'

interface ListMoreOptionsProps {
    id: number,
    handleClick: () => void,
    openInputToUpdateTask: (event: React.FormEvent) => void,
    setEditTask: (editTask: boolean) => void
}

const ListMoreOptions = ({id, handleClick, openInputToUpdateTask, setEditTask}: ListMoreOptionsProps) => {
    const { list, deleteTaskFromList } = useList();
    const editTask = (event: React.MouseEvent) => {
        event.stopPropagation();
        openInputToUpdateTask(event);
    }
    const closeAdditionalOptionsMenu = () => {
        handleClick();
        setEditTask(false);
    }
    return (
        <>
            <section className='flex'>
                <img onClick={(event) => editTask(event)} className="p-2 cursor-pointer" src={Edit} title="Edit this task." alt="An icon to edit to do list item" />
                <img onClick={() => deleteTaskFromList(id)} className="p-2 cursor-pointer" src={Delete} title="Delete this task." alt="An icon to edit to do list item" />
                <img onClick={closeAdditionalOptionsMenu} className="p-2 cursor-pointer" src={Close} title="Close menu." alt="An icon to close the additional options menu." />
            </section>
        </>
    )
}

export default ListMoreOptions;
