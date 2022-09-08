import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { Todo } from '../models/todo';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  constructor(private todoService: TodoService) {}

  @Input() todo: Todo;

  completeTodo(id: number): void {
    this.todoService.completeTodo(id);
  }

  deleteTodo(id: number): void {
    this.todoService.deleteTodo(id);
  }
}
