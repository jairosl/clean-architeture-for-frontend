import { Todo } from '@/business/domain/entities/Todo';
import { typeAction } from './actions';

export type TodosActions = { type: typeAction.GET_ALL; payload: Todo[]} 
| { type: typeAction.CREATE_TODO; payload: Todo;}