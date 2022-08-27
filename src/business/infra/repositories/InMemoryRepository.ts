import { Todo } from "../../domain/entities/Todo";
import { TodoRepository } from "../../domain/repositories/TodoRepository";

export class InMemoryRepository implements TodoRepository {
  todosMemory: Todo[] = [];

  async getTodos(): Promise<Todo[]> {
    return this.todosMemory;
  }

}