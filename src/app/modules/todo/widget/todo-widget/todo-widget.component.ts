import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Todo } from '../../model/todo';
import {
  TodoCreateAction,
  TodoDeleteAction,
  TodoToggleAction,
} from '../../store/todo.actions';
import { TodoState } from '../../store/todo.reducer';
import { todoListSelector } from '../../store/todo.selectors';

@Component({
  selector: 'app-todo-widget',
  templateUrl: './todo-widget.component.html',
  styleUrls: ['./todo-widget.component.scss'],
})
export class TodoWidgetComponent implements OnInit {
  todoList: Todo[];
  todoList$: Observable<Todo[]> = this.store$.pipe(select(todoListSelector));

  constructor(private store$: Store<TodoState>) {}

  ngOnInit(): void {}

  onCreate(name: string): void {
    console.log(name);
    this.store$.dispatch(new TodoCreateAction({ name }));
  }
  onDelete(id: number): void {
    this.store$.dispatch(new TodoDeleteAction({ id }));
  }
  onToggle(id: number): void {
    this.store$.dispatch(new TodoToggleAction({ id }));
  }
}
