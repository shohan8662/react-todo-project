import React from 'react';

const TodoList = ({listIteam, deleteIteam, index}) => {
    return (
        <div className='list'>
            <li className='list-items'>{listIteam}</li>
            <button className='btn-delete' onClick={()=>{
                deleteIteam(index)
            }}>Delete</button>
        </div>
    );
};

export default TodoList;