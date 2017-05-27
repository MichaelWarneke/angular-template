import { Action } from '@ngrx/store';
import { Todo } from "app/models/todo";
import { Post } from "app/models/post";
import { User } from "app/models/user";

export const FB_LOAD_USERS = '[HomeFB] Load Users';
export const FB_LOAD_USERS_SUCCESS = '[HomeFB] Load Users Success';
export const FB_LOAD_USERS_FAILED = '[HomeFB] Load Users Failed';

export const FB_LOAD_POSTS = '[HomeFB] Load Posts';
export const FB_LOAD_POSTS_SUCCESS = '[HomeFB] Load Posts Success';
export const FB_LOAD_POSTS_FAILED = '[HomeFB] Load Posts Failed';

export const FB_LOAD_TODOS = '[HomeFB] Load Todos';
export const FB_LOAD_TODOS_SUCCESS = '[HomeFB] Load Todos Success';
export const FB_LOAD_TODOS_FAILED = '[HomeFB] Load Todos Failed';

export const FB_CHANGE_SELECTED_USER_POSTS = '[HomeFB] Change Selected User Posts';
export const FB_CHANGE_SELECTED_USER_POSTS_SUCCESS = '[HomeFB] Change Selected User Posts Success';
export const FB_CHANGE_SELECTED_USER_POSTS_FAILED = '[HomeFB] Change Selected User Posts Failed';

export const FB_LOAD_SELECTED_USER_POSTS = '[HomeFB] Load Selected User Posts';
export const FB_LOAD_SELECTED_USER_POSTS_SUCCESS = '[HomeFB] Load Selected User Posts Success';
export const FB_LOAD_SELECTED_USER_POSTS_FAILED = '[HomeFB] Load Selected User Posts Failed';

export class LoadUsersAction implements Action {
  readonly type = FB_LOAD_USERS;
  constructor(public payload: string) { }
}

export class LoadUsersSuccessAction implements Action {
  readonly type = FB_LOAD_USERS_SUCCESS;
  constructor(public payload: User[]) { }
}

export class LoadUsersFailedAction implements Action {
  readonly type = FB_LOAD_USERS_FAILED;
}

export class LoadPostsAction implements Action {
  readonly type = FB_LOAD_POSTS;
  constructor(public payload: string) { }
}

export class LoadPostsSuccessAction implements Action {
  readonly type = FB_LOAD_POSTS_SUCCESS;
  constructor(public payload: Post[]) { }
}

export class LoadPostsFailedAction implements Action {
  readonly type = FB_LOAD_POSTS_FAILED;
}

export class LoadTodosAction implements Action {
  readonly type = FB_LOAD_TODOS;
  constructor(public payload: string) { }
}

export class LoadTodosSuccessAction implements Action {
  readonly type = FB_LOAD_TODOS_SUCCESS;
  constructor(public payload: Todo[]) { }
}

export class LoadTodosFailedAction implements Action {
  readonly type = FB_LOAD_TODOS_FAILED;
}

export class ChangeSelectedUserPostsAction implements Action {
  readonly type = FB_CHANGE_SELECTED_USER_POSTS;
  constructor(public payload: string) { }
}

export class ChangeSelectedUserPostsSuccessAction implements Action {
  readonly type = FB_CHANGE_SELECTED_USER_POSTS_SUCCESS;
}

export class ChangeSelectedUserPostsFailedAction implements Action {
  readonly type = FB_CHANGE_SELECTED_USER_POSTS_FAILED;
}

export class LoadSelectedUserPostsAction implements Action {
  readonly type = FB_LOAD_SELECTED_USER_POSTS;
  constructor(public payload: string) { }
}

export class LoadSelectedUserPostsSuccessAction implements Action {
  readonly type = FB_LOAD_SELECTED_USER_POSTS_SUCCESS;
  constructor(public payload: User) { }
}

export class LoadSelectedUserPostsFailedAction implements Action {
  readonly type = FB_LOAD_SELECTED_USER_POSTS_FAILED;
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