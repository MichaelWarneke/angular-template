import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";

import { Store } from "@ngrx/store";
import * as States from '../states';
import * as Reducers from '../reducers';
import * as Actions from '../actions';
import { User } from "app/models/user";

@Injectable()
export class UsersService {

  constructor(private store: Store<States.State>) { }

// Http
  getUsers(): Observable<any[]>{
      return this.store.select(Reducers.getUsers);
  }

  loadUsers(userId?: string) {
    this.store.dispatch(new Actions.Actions.home.LoadUsersAction(userId));
  }

// Firebase
  getFbUsers(): Observable<any[]>{
      return this.store.select(Reducers.getFireUsers);
  }

  loadFbUsers(userId?: string) {
    this.store.dispatch(new Actions.Actions.homeFire.LoadUsersAction(userId));
  }
}
