import React from 'react'

interface ComponentProps {
    list: ListItemObject[]
}
interface ListItemObject {
    id: number,
    list_item: string,
}

const List = ({list}: ComponentProps) => {
    return (
        <ul>
            {list.map(item => {
                return(<li key={item.id}>{item.list_item}</li>);
            })}
        </ul>
    );
}

export default List
