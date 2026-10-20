import { useState } from "react"
import TodoList from "./TodoList"
import NewTodo from "./NewTodo"
import { useEffect } from "react"


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

  const requestTodos = async () => {
    const url = "http://localhost:8000/api/todos";
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const result = await response.json();
    console.log(result);
    setTodo(result)
  }

  useEffect(() => {
    requestTodos()

    return () => {};
  }, [])

  return (
    <div>
      <NewTodo setTodoHandler={setTodoHandler} />
      <TodoList removeTodoHandler={removeTodoHandler} data={todos} editTodoHandler={editTodoHandler}/>  
    </div>
  )

}

export default App