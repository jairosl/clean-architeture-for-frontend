import { Todo } from "@/business/domain/entities/Todo";
import { TodoRepository } from "@/business/domain/repositories/TodoRepository";


export class InMemoryRepository implements TodoRepository {
  private todosMemory: Todo[] = [];
  
  async getTodos(): Promise<Todo[]> {
    return this.todosMemory;
  }
  
  async create(title: string): Promise<Todo> {
    const todo: Todo = {
      id: Math.floor(Math.random() * 1000),
      title,
      isCompleted: false,
    }

    this.todosMemory.push(todo);
  
    return todo
  }

}