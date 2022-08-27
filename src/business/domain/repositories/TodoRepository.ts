import { Todo } from "../entities/Todo";


export interface TodoRepository {
  getTodos(): Promise<Todo[]>;
}