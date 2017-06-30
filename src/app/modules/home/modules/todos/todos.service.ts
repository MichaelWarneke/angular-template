import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";

import { IUsersService, ITodosService, IHomeService } from "app/modules/core/store.interface";
import { User } from "app/models/user";
import { Todo } from "app/models/todo";

@Injectable()
export class TodosService {

  constructor(
    private userService: IUsersService,
    private todoService: ITodosService,
    private homeService: IHomeService) { 

    // Load users
    this.userService.loadFbUsers();
  }

  
  getFbUsers() : Observable<User[]> {
    return this.userService.getFbUsers();
  }

  getFbTodos() : Observable<Todo[]>{
    return this.todoService.getFbTodos();
  }

  getFireLoadingUsers() : Observable<boolean> {
    return this.homeService.getFireLoadingUsers();
  }

  getFireLoadingTodos() : Observable<boolean> {
    return this.homeService.getFireLoadingTodos();
  }

  loadFbTodos(id: string) {
    this.todoService.loadFbTodos(id);
  }
}
