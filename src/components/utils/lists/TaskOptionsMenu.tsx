import React from 'react'
import Edit from '../../../assets/icons/edit_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg'
import Delete from '../../../assets/icons/delete_24dp_EA3323_FILL0_wght400_GRAD0_opsz24.svg'
import Close from '../../../assets/icons/close_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg'
import { useList } from '../../../hooks/useList'

interface ListMoreOptionsProps {
    id: number,
    openCloseTaskOptionsMenu: (event: React.MouseEvent, isOpen: boolean) => void,
    openCloseUpdateTaskInput: (event: React.FormEvent, isOpen: boolean) => void,
    setEditTask: (editTask: boolean) => void
}

const ListMoreOptions = ({id, openCloseTaskOptionsMenu, openCloseUpdateTaskInput, setEditTask}: ListMoreOptionsProps) => {
    const { deleteTask } = useList();
    const editTask = (event: React.MouseEvent) => {
        event.stopPropagation();
        openCloseUpdateTaskInput(event, true);
    }
    const closeTaskOptionsMenu = (event: React.MouseEvent) => {
        openCloseTaskOptionsMenu(event, false);
        setEditTask(false);
    }
    return (
        <>
            <section className='flex'>
                <img onClick={(event) => editTask(event)} className="p-2 cursor-pointer" src={Edit} title="Edit this task." alt="An icon to edit this task." />
                <img onClick={() => deleteTask(id)} className="p-2 cursor-pointer" src={Delete} title="Delete this task." alt="An icon to delete this task item." />
                <img onClick={closeTaskOptionsMenu} className="p-2 cursor-pointer" src={Close} title="Close menu." alt="An icon to close this task menu." />
            </section>
        </>
    )
}

export default ListMoreOptions;
