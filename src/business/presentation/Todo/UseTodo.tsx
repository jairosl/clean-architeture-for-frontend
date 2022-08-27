import { useState } from "react";
import { Todo } from "../../domain/entities/Todo";
import { GetTodos } from "../../domain/useCases/Todo/GetAllTodos";
import { InMemoryRepository } from "../../infra/repositories/InMemoryRepository";

export function UseTodo() {
  const [todos, setTodos] = useState<Todo[]>([])

  const UseCaseGetTodos = new GetTodos(new InMemoryRepository)

  async function getTodos()  {
    setTodos(await UseCaseGetTodos.exec())
  }

  return {
    todos,
    getTodos,
  }
}