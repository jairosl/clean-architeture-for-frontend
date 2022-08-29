import { useState } from "react"
import { Todo } from "@/business/domain/entities/Todo"
import { GetAllTodos } from "@/business/domain/useCases/Todo/GetAllTodos"
import { InMemoryRepository } from "@/business/infra/repositories/InMemoryRepository"

export function UseTodo() {
  const [todos, setTodos] = useState<Todo[]>([])

  const UseCaseGetAllTodos = new GetAllTodos(new InMemoryRepository)

  async function getTodos()  {
    setTodos(await UseCaseGetAllTodos.execute())
  }

  return {
    todos,
    getTodos,
  }
}