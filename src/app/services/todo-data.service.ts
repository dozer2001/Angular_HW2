import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { HttpHeaders} from "@angular/common/http";
import { HttpParams} from "@angular/common/http";
import 'rxjs/add/operator/retry';
@Injectable()
export class TodoDataService {

  constructor(public  http:HttpClient) { }

  getTodos(){
    return this.http.get('https://jsonplaceholder.typicode.com/todos').retry(3);
  }
  addTodo(todo){
    return this.http.post('https://jsonplaceholder.typicode.com/todos', todo, {
      headers: new HttpHeaders().set('Content-type', 'application/json; charset=UTF8'),
      params: new HttpParams().set('id','32')
    });
  }
  editTodo(todo, index){
    return this.http.put('https://jsonplaceholder.typicode.com/todos/'+index, todo);
  }
  deleteTodo(index){
    return this.http.delete('https://jsonplaceholder.typicode.com/todos/'+index);
  }
}
