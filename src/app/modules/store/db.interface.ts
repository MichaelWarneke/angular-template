import { NgModule, ModuleWithProviders } from '@angular/core';

import { DbModule } from "app/modules/db/db.module";
import { DbFirebaseModule } from "app/modules/db/db-firebase/db-firebase.module";

import { UsersFbService } from "app/modules/db/db-firebase/services/users-fb.service";
import { TodosFbService } from "app/modules/db/db-firebase/services/todos-fb.service";
import { PostsFbService } from "app/modules/db/db-firebase/services/posts-fb.service";

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
    {provide: IUsersFbService, useExisting: UsersFbService},
    {provide: ITodosFbService, useExisting: TodosFbService},
    {provide: IPostsFbService, useExisting: PostsFbService},
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
