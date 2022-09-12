import { useReducer } from "react";
import { createTodos } from "@/business/domain/useCases/Todo/createTodo";
import { getAllTodos } from "@/business/domain/useCases/Todo/getAllTodos";
import { InMemoryRepository } from "@/business/infra/repositories/InMemoryRepository";
import { todoReducer } from "./reducer";
import { typeAction } from "./actions";

const repository =  new InMemoryRepository()
const UseCaseGetAllTodos = new getAllTodos(repository)
const UseCaseCreateTodo = new createTodos(repository)

export default function useTodo() {
  const [todos, dispatch] = useReducer(todoReducer, []);
  
  async function getTodos()  {
    const allTodos = await UseCaseGetAllTodos.execute()
    dispatch({type: typeAction.GET_ALL, payload: allTodos});
  }

  async function createTodo(title: string) {
    const newTodo = await UseCaseCreateTodo.execute(title)
    dispatch({type: typeAction.CREATE_TODO, payload: newTodo})
    
  }

  return {
    getTodos,
    createTodo,
    todos,
  }
}