import React, { useState } from 'react';

const TodoInput = ({addList}) => {

    const [todoInput, setInput] = useState('')

    const handleValue = e =>{
        setInput(e.target.value)
    }


    return (
        <div>
            <input type="text" placeholder='Type your Todo here'  onChange={handleValue} value={todoInput}/>
            <button className='btn' type="submit" onClick={()=>{
                addList(todoInput)
                setInput('')
            }}>Add To List</button>
            <hr/>
        </div>
    );
};

export default TodoInput;