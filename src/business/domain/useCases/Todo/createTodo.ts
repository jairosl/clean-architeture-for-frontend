import { Todo } from '@/business/domain/entities/Todo';
import { TodoRepository } from '@/business/domain/repositories/TodoRepository';

export class createTodos {
  private todoRepo: TodoRepository
    constructor(_todoRepo: TodoRepository) {
        this.todoRepo = _todoRepo;
    }
  
  async execute(title: string):Promise<Todo> {
    return await this.todoRepo.create(title)
  }
}