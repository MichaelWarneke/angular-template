import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Todo } from "app/models/todo";
import { AngularFireDatabase } from "angularfire2/database";

@Injectable()
export abstract class TodosFbService {

  constructor(protected db: AngularFireDatabase) { }

  getTodosByUser(key?: string): Observable<Todo[]>{
    console.log("getTodosByUser : " + key);
    if(key && key != "") {
      return this.db.list('/todos/', {query: { orderByChild: 'userId', equalTo: key}} ).map(Todo.fromJsonList);
    }
    return null;
  }
}
