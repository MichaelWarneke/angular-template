// router-data.effects.ts
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Actions, Effect } from '@ngrx/effects';

import * as homeActions from './home-firebase.actions';
import { of } from "rxjs/observable/of";
import { User } from "app/models/user";
import { Post } from "app/models/post";
import { Todo } from "app/models/todo";

import 'rxjs/add/operator/mergeMap';
import { Observable } from "rxjs/Observable";
import { IUsersFbService, ITodosFbService, IPostsFbService } from "app/modules/store/db.interface";

@Injectable()
export class HomeFireEffects {
  constructor(private actions$: Actions, 
              private usersService: IUsersFbService,
              private postsService: IPostsFbService,
              private todosService: ITodosFbService
              ) {
  }

  @Effect() 
  loadUsers$ = this.actions$
    .ofType(homeActions.FB_LOAD_USERS)
    .switchMap(action => this.usersService.getUsers())
    .mergeMap((users: User[]) => {
      return [
        new homeActions.LoadUsersSuccessAction(users),
      ]
    })
    .catch(() => of (new homeActions.LoadUsersFailedAction()));

  @Effect() 
  loadPosts$ = this.actions$
    .ofType(homeActions.FB_LOAD_POSTS)
    .map((action: homeActions.LoadPostsAction) => action.payload)
    .switchMap(userId => this.postsService.getPostsByUser(userId))
    .map((posts: Post[]) => new homeActions.LoadPostsSuccessAction(posts))
    .catch(() => of (new homeActions.LoadPostsFailedAction()));

  @Effect() 
  loadTodos$ = this.actions$
    .ofType(homeActions.FB_LOAD_TODOS)
    .map((action: homeActions.LoadTodosAction) => action.payload)
    .switchMap(payload => this.todosService.getTodosByUser(payload))
    .mergeMap((todos: Todo[]) => {
      return [
        new homeActions.LoadTodosSuccessAction(todos)
      ]
    })
    .catch(() => of (new homeActions.LoadTodosFailedAction()));

  @Effect() 
  changeSelectedUserPosts$ = this.actions$
    .ofType(homeActions.FB_CHANGE_SELECTED_USER_POSTS)
    .map((action: homeActions.ChangeSelectedUserPostsAction) => action.payload)
    .switchMap(userId => {
      return [
        new homeActions.LoadPostsAction(userId),
        new homeActions.LoadSelectedUserPostsAction(userId),
        new homeActions.ChangeSelectedUserPostsSuccessAction()
      ];
    })
    .catch(() => of (new homeActions.ChangeSelectedUserPostsFailedAction()));

  @Effect() 
  loadSelectedUserPosts$ = this.actions$
    .ofType(homeActions.FB_LOAD_SELECTED_USER_POSTS)
    .switchMap(action => this.usersService.getUser(action.payload))
    .map((user: User) => new homeActions.LoadSelectedUserPostsSuccessAction(user))
    .catch(() => of (new homeActions.LoadSelectedUserPostsFailedAction()));
}