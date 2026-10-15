import {useState} from "react"

var counter = 0;

export default function NewTodo({setTodoHandler}){
    const [input,setInput] =useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const newTodo = {
            id: counter++,
            text: input
        }
        setTodoHandler(newTodo)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                value={input}
                onChange={(e) => setInput(e.target.value)}></input>
            <button type="submit">Submit</button>
        </form>
    )
}