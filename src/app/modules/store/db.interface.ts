import { NgModule, ModuleWithProviders } from '@angular/core';

import { DbModule } from "app/modules/db/db.module";
import { DbFirebaseModule } from "app/modules/db/db-firebase/db-firebase.module";

import * as FbService from "app/modules/db/db-firebase/services/";

import { Observable } from "rxjs/Observable";
import { User } from "app/models/user";
import { Todo } from "app/models/todo";
import { Post } from "app/models/post";


export abstract class IUsersFbService {
    getUsers: (id?: string) => Observable<User[]>;
    getUser: (id: string) => Observable<User>;
}

export abstract class ITodosFbService {
    getTodosByUser: (key?: string) => Observable<Todo[]>;
}

export abstract class IPostsFbService {
    getPostsByUser: (key: string) => Observable<Post[]>;
}
@NgModule({
  imports: [
    DbModule.forRoot(),
    DbFirebaseModule.forRoot(),
  ],
  declarations: [],
  providers: [
    {provide: IUsersFbService, useExisting: FbService.UsersFbService},
    {provide: ITodosFbService, useExisting: FbService.TodosFbService},
    {provide: IPostsFbService, useExisting: FbService.PostsFbService},
  ]
})
export class DbInterfaceModule { 
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DbInterfaceModule,
      providers: []
    };
  }
}
