import { Todo } from "../model/Todo";

export interface TodoRepository {
  getTodos(): Promise<Todo[]>;
}