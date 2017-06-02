import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Store } from "@ngrx/store";
import * as States from 'app/modules/store/states';
import * as Reducers from 'app/modules/store/reducers';
import * as Actions from 'app/modules/store/actions';
import { User } from "app/models/user";

@Injectable()
export class HomeService {

  constructor(private store: Store<States.State>) { 
              
  }

// Http
  getSelectedUserPosts(): Observable<User> {
    return this.store.select(Reducers.getselectedUserPosts);
  }

  changeSelectedUserPosts(userId: string) {
    this.store.dispatch(new Actions.Actions.home.ChangeSelectedUserPostsAction(userId));
  }

// Firebase
  getFbSelectedUserPosts(): Observable<User> {
    return this.store.select(Reducers.getFireselectedUserPosts);
  }

  changeFbSelectedUserPosts(userId: string) {
    this.store.dispatch(new Actions.Actions.homeFire.ChangeSelectedUserPostsAction(userId));
  }

  getFireLoadingUsers(): Observable<boolean> {
    return this.store.select(Reducers.getFireLoadingUsers);
  }

  getFireLoadingPosts(): Observable<boolean> {
    return this.store.select(Reducers.getFireLoadingPosts);
  }

  getFireLoadingTodos(): Observable<boolean> {
    return this.store.select(Reducers.getFireLoadingTodos);
  }
}
