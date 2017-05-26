import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";

import { Store } from "@ngrx/store";
import * as States from 'app/modules/store/states';
import * as Reducers from 'app/modules/store/reducers';
import * as Actions from 'app/modules/store/actions';
import { Todo } from "app/models/todo";

@Injectable()
export class TodosService {

  constructor(private store: Store<States.State>) { }

  getTodos(): Observable<Todo[]>{
    return this.store.select(Reducers.getTodos);
  }

  loadTodos(userId: number) {
    this.store.dispatch(new Actions.Actions.home.LoadTodosAction(userId));
  }
}
