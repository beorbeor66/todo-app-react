import { useState } from "react"

export default function TodoList({removeTodoHandler,data,editTodoHandler}) {
  const [text,setText] =useState('')
  const [editID,setEditID] = useState(null)

  const handleID = (todo) => {
    setEditID(todo.id)
    setText(todo.text)
  }

  const handleSave =(id) => {
    if (text.trim()){
      editTodoHandler(id,text)
    }
    setEditID(null)
  }

  const removeTodo =(id) =>{
    removeTodoHandler(id)
  }
  return (
      <ul>
        {data.map((todo) => (
            <li key={todo.id}>{todo.text}
            {editID === todo.id ? (
            <div>
              <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
              <button onClick={() => handleSave(todo.id)}> Luu </button>
              <button onClick={() => setEditID(null)}>Huy</button>
            </div>) : (
            <div>
              <button onClick ={() => { removeTodo(todo.id) }} type="button">X</button> 
              <button onClick={() =>{ handleID(todo) }} type="button" >Edit</button>
              </div>
          )}
          </li>
        ))}
      </ul>
  )
}