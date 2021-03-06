import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";

import { Store } from "@ngrx/store";
import * as States from '../states';
import * as Reducers from '../reducers';
import * as Actions from '../actions';
import { Todo } from "app/models/todo";

@Injectable()
export class TodosService {

  constructor(private store: Store<States.State>) { }

// Http
  getTodos(): Observable<Todo[]>{
    return this.store.select(Reducers.getTodos);
  }

  loadTodos(userId: string) {
    this.store.dispatch(new Actions.Actions.home.LoadTodosAction(userId));
  }

// Firebase 
  getFbTodos(): Observable<Todo[]>{
    return this.store.select(Reducers.getFireTodos);
  }

  loadFbTodos(userId: string) {
    this.store.dispatch(new Actions.Actions.homeFire.LoadTodosAction(userId));
  }
}
