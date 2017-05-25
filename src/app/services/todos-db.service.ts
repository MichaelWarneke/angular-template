import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class TodosDbService {

  constructor(private http: Http) { }

  getTodos(): Observable<any[]>{
    return this.http.get("http://jsonplaceholder.typicode.com/todos")
                    .map((res:Response) => res.json())
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  getTodosByUser(id: number): Observable<any[]>{
    return this.http.get("http://jsonplaceholder.typicode.com/todos?userId=" +id)
                    .map((res:Response) => res.json())
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
}
