import { useState } from "react"
import TodoList from "./TodoList"
import NewTodo from "./NewTodo"
//Test
const App =() =>{
  const [todos,setTodo] =useState([])
  const setTodoHandler = (newTodo) => {
    setTodo([...todos, newTodo])
  }

  const removeTodoHandler =(hi) =>{
    const Check=(todo) =>{
      return todo.id !== hi
    }
    setTodo(todos.filter(Check))
  }

  const editTodoHandler =(id,newText) => {
    setTodo(
      todos.map((todo) =>
        todo.id === id ? {
          ...todo,text: newText } : todo
    )
  )
  }

  return (
    <div>
      <NewTodo setTodoHandler={setTodoHandler} />
      <TodoList removeTodoHandler={removeTodoHandler} data={todos} editTodoHandler={editTodoHandler}/>  
    </div>
  )

}

export default App