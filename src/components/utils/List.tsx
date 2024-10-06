import React from 'react'

const List = (): JSX.Element => {
    const list = [1,2,3];
    return (
        <ul>
            {list.map(item => {
                return(<li>{item}</li>);
            })}
        </ul>
    );
}

export default List
