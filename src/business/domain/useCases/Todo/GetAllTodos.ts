import { Todo } from "../../entities/Todo";
import { TodoRepository } from "../../repositories/TodoRepository";


export interface GetAllTodosUseCase {
  exec: () => Promise<Todo[]>
}

export class GetTodos implements GetAllTodosUseCase {
  private todoRepo: TodoRepository
    constructor(_todoRepo: TodoRepository) {
        this.todoRepo = _todoRepo;
    }
  
  async exec():Promise<Todo[]> {
    return await this.todoRepo.getTodos()
  }
  
}