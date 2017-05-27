import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Todo } from "app/models/todo";

@Injectable()
export class TodosDbService {

  constructor(private http: Http) { }

  getTodos(id?: string): Observable<Todo[]>{
    if(id && id != "" && id !="0") {
      return this.getTodosByUser(id);
    }
    
    return this.http.get("https://jsonplaceholder.typicode.com/todos")
                    .map((res:Response) => res.json())
                    .map(Todo.fromJsonList)
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  getTodosByUser(id: string): Observable<Todo[]>{
    return this.http.get("https://jsonplaceholder.typicode.com/todos?userId=" +id)
                    .map((res:Response) => res.json())
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
}
