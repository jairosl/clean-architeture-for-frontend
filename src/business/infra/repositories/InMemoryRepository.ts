import { Todo } from "@/business/domain/entities/Todo";
import { TodoRepository } from "@/business/domain/repositories/TodoRepository";


export class InMemoryRepository implements TodoRepository {
  todosMemory: Todo[] = [];

  async getTodos(): Promise<Todo[]> {
    return this.todosMemory;
  }

}