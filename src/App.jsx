import { useState } from "react"
//Test
const App =() =>{
  const [todo,setTodo] =useState([])
  const [input,setInput] =useState('')

  const handleSubmit =(e)=>{
    e.preventDefault()
    const newTodo ={
      id: Date.now(),
      text: input
    }

  setTodo([...todo,newTodo])
}
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
        type = 'text' 
        value={input} 
        onChange={(e) => setInput(e.target.value)}></input>
        <button type="submit">Submit</button>        
      </form>

      <ul>
        {todo.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  )

}

export default App