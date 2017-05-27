// router-data.effects.ts
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Actions, Effect } from '@ngrx/effects';

import * as homeActions from './home-firebase.actions';
import { UsersFbService } from "app/modules/db/db-firebase/services/users-fb.service";
import { PostsFbService } from "app/modules/db/db-firebase/services/posts-fb.service";
import { TodosFbService } from "app/modules/db/db-firebase/services/todos-fb.service";
import { of } from "rxjs/observable/of";
import { User } from "app/models/user";
import { Post } from "app/models/post";
import { Todo } from "app/models/todo";

import 'rxjs/add/operator/mergeMap';

@Injectable()
export class HomeFireEffects {
  constructor(private actions$: Actions, 
              private usersService: UsersFbService,
              private postsService: PostsFbService,
              private todosService: TodosFbService
              ) {
  }

  @Effect() 
  loadUsers$ = this.actions$
    .ofType(homeActions.FB_LOAD_USERS)
    .switchMap(action => this.usersService.getUsers())
    .map((users: User[]) => new homeActions.LoadUsersSuccessAction(users))
    .catch(() => of (new homeActions.LoadUsersFailedAction()));

  @Effect() 
  loadPosts$ = this.actions$
    .ofType(homeActions.FB_LOAD_POSTS)
    .switchMap(action => this.postsService.getPostsByUser(action.payload))
    .map((posts: Post[]) => new homeActions.LoadPostsSuccessAction(posts))
    .catch(() => of (new homeActions.LoadPostsFailedAction()));

  @Effect() 
  loadTodos$ = this.actions$
    .ofType(homeActions.FB_LOAD_TODOS)
    .switchMap(action => this.todosService.getTodosByUser(action.payload))
    .map((todos: Todo[]) => new homeActions.LoadTodosSuccessAction(todos))
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