import { NgModule, ModuleWithProviders } from '@angular/core';

import { AppStoreModule } from 'app/modules/store/app-store.module';
import { Observable } from "rxjs/Observable";

import { AppService } from "app/modules/store/services/app.service";
import { HomeService } from "app/modules/store/services/home.service";
import { PostsService } from "app/modules/store/services/posts.service";
import { TodosService } from "app/modules/store/services/todos.service";
import { UsersService } from "app/modules/store/services/users.service";

import { User } from "app/models/user";
import { Post } from "app/models/post";
import { Todo } from "app/models/todo";


export abstract class IAppService {
  getSideMenu: () => Observable<boolean>;
  closeSideMenu: () => void;
  openSideMenu: () => void;
  toggleSideMenu: () => void;
  getShowWaitingBar: () => Observable<boolean>;
  showWaitingBar: (showWaitingBar: boolean) => void
}

export abstract class IHomeService {
// Http
  getSelectedUserPosts: () => Observable<User>;
  changeSelectedUserPosts: (userId: string) => void;
// Firebase
  getFbSelectedUserPosts: () => Observable<User>;
  changeFbSelectedUserPosts: (userId: string) => void;
  getFireLoadingUsers: () => Observable<boolean>;
  getFireLoadingPosts: () => Observable<boolean>;
  getFireLoadingTodos: () => Observable<boolean>;
}

export abstract class IPostsService {
// Http
  getPosts: () => Observable<Post[]>;
  loadPosts: (userId: string) => void;
// Firebase 
  getFbPosts: () => Observable<Post[]>;
  loadFbPosts: (userId: string) => void;
}

export abstract class ITodosService {
// Http
  getTodos: () => Observable<Todo[]>;
  loadTodos: (userId: string) => void;
// Firebase 
  getFbTodos: () => Observable<Todo[]>;
  loadFbTodos: (userId: string) => void;
}

export abstract class IUsersService {
// Http
  getUsers: () => Observable<any[]>;
  loadUsers: (userId?: string) => void
// Firebase
  getFbUsers: () => Observable<any[]>;
  loadFbUsers: (userId?: string) => void;
}

@NgModule({
  imports: [
    AppStoreModule.forRoot(),
  ],
  declarations: [],
  providers: [
    {provide: IAppService, useExisting: AppService},
    {provide: IHomeService, useExisting: HomeService},
    {provide: IPostsService, useExisting: PostsService},
    {provide: ITodosService, useExisting: TodosService},
    {provide: IUsersService, useExisting: UsersService},
  ]
})
export class StoreInterfaceModule { 
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: StoreInterfaceModule,
      providers: []
    };
  }
}
