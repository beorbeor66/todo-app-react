import { useState } from "react"
import TodoList from "./TodoList"
import NewTodo from "./NewTodo"
//Test
const App =() =>{
  const [todos,setTodo] =useState([])
  const setTodoHandler = (newTodo) => {
    setTodo([...todos, newTodo])
  }
  const removeTodoHandler =(id) =>{
    const Check=(todo) =>{
      return todo.id !== id
    }
    setTodo(todos.filter(Check))

  }
  return (
    <div>
      <NewTodo setTodoHandler={setTodoHandler} />
      <TodoList removeTodoHandler={removeTodoHandler} data={todos}/>  
    </div>
  )

}

export default App