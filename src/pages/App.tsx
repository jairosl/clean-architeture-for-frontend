import { useEffect, useState } from "react";
import useTodo from "@/business/controllers/Todo/useTodo";

function App() {
  const [input, setInput] = useState('')
  const { getTodos, createTodo, todos } = useTodo();

  useEffect(() => {
    getTodos()
  }, [])

  const handleCreateTodo = () => {
    createTodo(input)
  }

  return (
    <div className="min-h-screen w-full bg-gray-300 flex flex-col content-center justify-center">
      <h1 className="text-center mb-4">Todo Arquitetura</h1>
      <div className="flex content-center gap-1 justify-center">
        <input 
          className="bg-gray-50 px-2 focus:border-lime-700"
          type="text" 
          value={input} 
          onChange={(e) => {
            setInput(e.target.value)
          }}
        />
        <button 
          type="button" 
          onClick={handleCreateTodo}
          className="bg-lime-700 p-2 text-white rounded-md hover:bg-lime-600"
        > 
        add
        </button>
      </div>
      <div className="text-center">
        {todos.map(todo => {
          return (
            <div key={todo.id}>
              {todo.title}
            </div>
          )
        })}
      </div>
      
    </div>
  )
}

export default App
