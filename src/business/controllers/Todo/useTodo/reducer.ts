import { Todo } from '@/business/domain/entities/Todo';
import { typeAction } from './actions';
import { TodosActions } from './type';

export const  todoReducer = (state: Todo[], action: TodosActions) => {

  const { type } = action;

  switch (type) {
    case typeAction.CREATE_TODO:
      if(action.payload) {
  
        return [
          ...state,
          action.payload
        ];
      }
      return [...state];
      
    case typeAction.GET_ALL:
      return [
        ...action.payload,
      ];
    default:
      return state;
  }
}