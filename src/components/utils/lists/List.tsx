import React from 'react'
import Circle from './Circle'

interface ComponentProps {
    list: ListItemObject[],
    user: string,
}
interface ListItemObject {
    id: number,
    list_item: string,
}

const List = ({list, user}: ComponentProps) => {
    return (
        <>
            <h2 className="text-center text-2xl font-medium pb-10">{user}'s List</h2>
            <ul className='w-full'>
                {list.map(item => {
                    return(<li key={item.id} className="flex"><Circle /> <p className='text-xl pl-5'>{item.list_item}</p></li>);
                })}
            </ul>
        </>
    );
}

export default List
