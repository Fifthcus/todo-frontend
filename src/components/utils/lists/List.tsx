import React, { useState } from 'react'
import ListItem from './ListItem';

interface ComponentProps {
    list: ListObject[],
    user: string,
}
interface ListObject {
    id: number,
    list_item: string,
}

const List = ({list, user}: ComponentProps) => {
    return (
        <>
            <h2 className="text-center text-2xl font-medium pb-10">{user}'s List</h2>
            <ul className='w-full' data-testid="task-list">
                {list.map(item => {
                    return <ListItem key={item.id} item={item}/>
                })}
            </ul>
        </>
    );
}

export default List
