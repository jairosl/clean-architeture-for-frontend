import { Todo } from '@/business/domain/entities/Todo';
import { TodoRepository } from "@/business/domain/repositories/TodoRepository";


export class GetAllTodos  {
  private todoRepo: TodoRepository
    constructor(_todoRepo: TodoRepository) {
        this.todoRepo = _todoRepo;
    }
  
  async execute():Promise<Todo[]> {
    return await this.todoRepo.getTodos()
  }
  
}