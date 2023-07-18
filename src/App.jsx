import { useState } from 'react'
import './App.css'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

function App() {
  const [listTodo, setListTodo] = useState([])

  let addList = todoInput =>{
    setListTodo([...listTodo, todoInput])
  }

  const deleteItem = (key)=>{
    let newList = [...listTodo]

    newList.splice(key, 1)
    setListTodo([...newList])
  }
  

  return (
    <div className='body'>
      <div className="container">
        <TodoInput addList={addList}/>
        <h1>To Do:</h1>
        <hr/>
      {listTodo.map((listIteam, i)=> {
        return (<TodoList key={i} index={i} deleteIteam={deleteItem} listIteam={listIteam}/>)
      })}
      </div>
      
    </div>
  )
}

export default App
