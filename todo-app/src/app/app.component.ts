import { Component, OnInit  } from '@angular/core';
import {TodoService} from './todo.service';
import {Todo} from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ TodoService ]
})
export class AppComponent implements OnInit {
  todos = [];
  newTodo: Todo = new Todo();

  constructor(private todoService: TodoService) {
  }


  getTodos(): void {
    this.todoService.getPosts()
        .subscribe(
            resultArray => { console.log(resultArray); this.todos = resultArray; },
            error => console.log('Error :: ' + error)
        );
 }

 addTodo(): void {
  this.todoService.addTodo(this.newTodo)
  .subscribe(
      result => {  this.todos.push(result); },
      error => console.log('Error :: ' + error)
  );
   this.newTodo = new Todo();
 }

 deleteTodo(id: string) {
  this.todoService.deleteTodo(id)
  .subscribe(
      result => {
        this.todos = this.todos
        .filter(todo => todo._id !== result._id
        ); },
      error => console.log('Error :: ' + error)
  );
  this.todos = this.todos
  .filter(todo => todo.id !== id);
 }

 updateTodo(id: string) {
  this.todoService.updateTodo(id)
  .subscribe(
      result => {
        console.log(result);
        this.todos = this.todos
        .filter(todo => todo._id !== result._id
        );
        this.todos.push(result);
       },
      error => console.log('Error :: ' + error)
  );
  this.todos = this.todos
  .filter(todo => todo.id !== id);
 }


ngOnInit(): void {
    this.getTodos();
}
}
