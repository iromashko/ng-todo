import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TodoState, TODO_REDUCER_NODE } from './todo.reducer';

export const TodoFeatureSelector = createFeatureSelector<TodoState>(
  TODO_REDUCER_NODE
);

export const todoListSelector = createSelector(
  TodoFeatureSelector,
  (state) => state.todoList
);
