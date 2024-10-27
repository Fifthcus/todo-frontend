import React, { useState } from 'react'
import Circle from './Circle'
import More from '../../../assets/icons/more_vert_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg'
import ListMoreOptions from './ListMoreOptions';

interface ListItemProps {
    item: any,
    id: number,
}

const ListItem = ({item, id}: ListItemProps) => {
    const [moreOptions, setMoreOptions] = useState(false);
    const displayMoreOptions = (event: React.MouseEvent) => {
        event.stopPropagation();
        setMoreOptions(true);
    }
    const closeMoreOptions = () => {
        setMoreOptions(false);
    }
    return (
    <li onClick={closeMoreOptions} data-testid='record' className="flex items-center w-full py-2">
        <Circle />
        <p className='flex-grow text-xl pl-5'>{item.list_item}</p>
        {moreOptions ? <ListMoreOptions handleClick={closeMoreOptions} id={id} /> :
        <img onClick={(event) => displayMoreOptions(event)} className="cursor-pointer p-2" src={More} alt="Three vertical dots." />
        }
    </li>)
}

export default ListItem
