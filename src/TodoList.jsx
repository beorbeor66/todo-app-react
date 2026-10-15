export default function TodoList({removeTodoHandler,data}) {
  const removeTodo =(id) =>{
    removeTodoHandler(id)
  }
  return (
      <ul>
        {data.map((todo) => (
          <li key={todo.id}>{todo.text}
          <button onClick ={() => { removeTodo(todo.id) }} type="button">X</button> 
          </li>
        ))}
      </ul>
  )
}