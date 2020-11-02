import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../../model/todo';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss'],
})
export class TodoListItemComponent implements OnInit {
  @Input()
  todo: Todo;

  @Output()
  delete = new EventEmitter();

  @Output()
  toggle = new EventEmitter();

  @Output()
  edit = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onDelete(): void {
    this.delete.emit();
  }
  onToggle(event): void {
    event.preventDefault();
    this.toggle.emit();
  }
  onEdit(): void {
    this.edit.emit();
  }
}
