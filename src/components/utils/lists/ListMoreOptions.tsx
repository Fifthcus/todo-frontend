import React from 'react'
import Edit from '../../../assets/icons/edit_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg'
import Delete from '../../../assets/icons/delete_24dp_EA3323_FILL0_wght400_GRAD0_opsz24.svg'
import Close from '../../../assets/icons/close_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg'

const ListMoreOptions = () => {
    const editListItem = (event: React.MouseEvent) => {
        event.stopPropagation();
        console.log("edit");
    }
    const deleteListItem = (event: React.MouseEvent) => {
        event.stopPropagation();
        console.log("delete");
    }
    return (
        <>
            <section className='flex'>
                <img onClick={(event) => editListItem(event)} className="p-2" src={Edit} alt="An icon to edit to do list item" />
                <img onClick={(event) => deleteListItem(event)} className="p-2" src={Delete} alt="An icon to edit to do list item" />
                <img onClick={(event) => deleteListItem(event)} className="p-2" src={Close} alt="An icon to close the additional options menu." />
            </section>
        </>
    )
}

export default ListMoreOptions;
