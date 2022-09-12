import { Todo } from "@/business/domain/entities/Todo";

export interface TodoRepository {
  getTodos(): Promise<Todo[]>;
  create(title: string): Promise<Todo>;
}