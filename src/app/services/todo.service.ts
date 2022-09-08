import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Todo } from '../models/todo';

@Injectable({ providedIn: 'root' })
export class TodoService {
  todos: Todo[] = [];
  _todos$: BehaviorSubject<Todo[]> = new BehaviorSubject<Todo[]>(this.todos);

  getAllTodos(): Observable<Todo[]> {
    return this._todos$;
  }

  createTodo(title: string): void {
    const todo: Todo = { id: this.todos.length + 1, title, isDone: false };
    this.todos.push(todo);
    this._todos$.next([...this.todos]);
  }

  completeTodo(id: number) {
    const index: number = this.todos.indexOf(
      this.todos.find((todo) => todo.id === id)
    );
    this.todos[index].isDone = !this.todos[index].isDone;
  }

  deleteTodo(id: number): void {
    const index: number = this.todos.indexOf(
      this.todos.find((todo) => todo.id === id)
    );

    this.todos = this.todos.filter((todo) => todo.id !== id);
    this._todos$.next([...this.todos]);
  }
}
