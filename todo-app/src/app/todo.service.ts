import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
 import {Observable} from 'rxjs/Observable';
 import 'rxjs/Rx';
 import {Todo} from './todo';



@Injectable()
export class TodoService {
  private _todoURL = 'http://localhost:3000/todos';

  constructor(private http: Http) { }

  getPosts(): Observable<Todo[]> {
    return this.http
        .get(this._todoURL)
        .map((response: Response) => {
            return <Todo[]>response.json();
        })
        .catch(this.handleError);
  }

  addTodo(todo: Todo): Observable<Todo[]> {
    return this.http.post(this._todoURL, todo).map((response: Response) => {
      return <Todo[]>response.json();
     })
   .catch(this.handleError);
  }

  updateTodo(id: string): Observable<Todo> {
    return this.http.put(this._todoURL + '/' + id, {}).map((response: Response) => {
      return <Todo>response.json();
     })
   .catch(this.handleError);
  }

  deleteTodo(id: string): Observable<Todo> {
    return this.http.delete(this._todoURL + '/' + id).map((response: Response) => {
      return <Todo>response.json();
     })
   .catch(this.handleError);
  }

private handleError(error: Response) {
  return Observable.throw(error.statusText);
}

}
