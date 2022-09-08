import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo';
import { Observable, of } from 'rxjs';
import { FormControl } from '@angular/forms';
import { TodoService } from '../services/todo.service';
import { TemplateRef, ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';
import { ContentChild } from '@angular/core';
import { Log } from '@angular/core/testing/src/logger';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos$: Observable<Todo[]>;

  todoTitle: FormControl = new FormControl('');
  
  @ViewChild('itodo', { read: ElementRef })
  inputTodo: ElementRef<HTMLButtonElement>;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.getAllTodos().subscribe((v) => (this.todos$ = of(v)));
  }

  createTodo(): void {
    if (this.todoTitle.value !== '') {
      this.todoService.createTodo(this.todoTitle.value);
      this.todoTitle.setValue('');
    }
  }

  focus(itodo: HTMLInputElement) {
    itodo.focus();
  }
}
