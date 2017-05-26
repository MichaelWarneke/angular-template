import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";

import { Store } from "@ngrx/store";
import * as States from 'app/modules/store/states';
import * as Reducers from 'app/modules/store/reducers';
import * as Actions from 'app/modules/store/actions';
import { User } from "app/models/user";

@Injectable()
export class UsersService {

  constructor(private store: Store<States.State>) { }

  getUsers(): Observable<any[]>{
      return this.store.select(Reducers.getUsers);
  }

  loadUsers(userId: number) {
    this.store.dispatch(new Actions.Actions.home.LoadUsersAction(userId));
  }
}
