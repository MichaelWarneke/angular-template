import { Action } from '@ngrx/store';
import { Todo } from "app/models/todo";
import { Post } from "app/models/post";
import { User } from "app/models/user";

export const LOAD_USERS = '[Home] Load Users';
export const LOAD_USERS_SUCCESS = '[Home] Load Users Success';
export const LOAD_USERS_FAILED = '[Home] Load Users Failed';

export const LOAD_POSTS = '[Home] Load Posts';
export const LOAD_POSTS_SUCCESS = '[Home] Load Posts Success';
export const LOAD_POSTS_FAILED = '[Home] Load Posts Failed';

export const LOAD_TODOS = '[Home] Load Todos';
export const LOAD_TODOS_SUCCESS = '[Home] Load Todos Success';
export const LOAD_TODOS_FAILED = '[Home] Load Todos Failed';

export const CHANGE_SELECTED_USER_POSTS = '[Home] Change Selected User Posts';
export const CHANGE_SELECTED_USER_POSTS_SUCCESS = '[Home] Change Selected User Posts Success';
export const CHANGE_SELECTED_USER_POSTS_FAILED = '[Home] Change Selected User Posts Failed';

export const LOAD_SELECTED_USER_POSTS = '[Home] Load Selected User Posts';
export const LOAD_SELECTED_USER_POSTS_SUCCESS = '[Home] Load Selected User Posts Success';
export const LOAD_SELECTED_USER_POSTS_FAILED = '[Home] Load Selected User Posts Failed';

export class LoadUsersAction implements Action {
  readonly type = LOAD_USERS;
  constructor(public payload: number) { }
}

export class LoadUsersSuccessAction implements Action {
  readonly type = LOAD_USERS_SUCCESS;
  constructor(public payload: User[]) { }
}

export class LoadUsersFailedAction implements Action {
  readonly type = LOAD_USERS_FAILED;
}

export class LoadPostsAction implements Action {
  readonly type = LOAD_POSTS;
  constructor(public payload: number) { }
}

export class LoadPostsSuccessAction implements Action {
  readonly type = LOAD_POSTS_SUCCESS;
  constructor(public payload: Post[]) { }
}

export class LoadPostsFailedAction implements Action {
  readonly type = LOAD_POSTS_FAILED;
}

export class LoadTodosAction implements Action {
  readonly type = LOAD_TODOS;
  constructor(public payload: number) { }
}

export class LoadTodosSuccessAction implements Action {
  readonly type = LOAD_TODOS_SUCCESS;
  constructor(public payload: Todo[]) { }
}

export class LoadTodosFailedAction implements Action {
  readonly type = LOAD_TODOS_FAILED;
}

export class ChangeSelectedUserPostsAction implements Action {
  readonly type = CHANGE_SELECTED_USER_POSTS;
  constructor(public payload: number) { }
}

export class ChangeSelectedUserPostsSuccessAction implements Action {
  readonly type = CHANGE_SELECTED_USER_POSTS_SUCCESS;
}

export class ChangeSelectedUserPostsFailedAction implements Action {
  readonly type = CHANGE_SELECTED_USER_POSTS_FAILED;
}

export class LoadSelectedUserPostsAction implements Action {
  readonly type = LOAD_SELECTED_USER_POSTS;
  constructor(public payload: number) { }
}

export class LoadSelectedUserPostsSuccessAction implements Action {
  readonly type = LOAD_SELECTED_USER_POSTS_SUCCESS;
  constructor(public payload: User) { }
}

export class LoadSelectedUserPostsFailedAction implements Action {
  readonly type = LOAD_SELECTED_USER_POSTS_FAILED;
}

export type Actions
  = LoadUsersSuccessAction
  | LoadUsersFailedAction
  | LoadPostsSuccessAction
  | LoadPostsFailedAction
  | LoadTodosSuccessAction
  | LoadTodosFailedAction
  | ChangeSelectedUserPostsAction
  | ChangeSelectedUserPostsSuccessAction
  | ChangeSelectedUserPostsFailedAction
  | LoadSelectedUserPostsAction
  | LoadSelectedUserPostsSuccessAction
  | LoadSelectedUserPostsFailedAction;