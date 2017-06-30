import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TodosService } from "./todos.service";

import { Observable } from "rxjs/Observable";
import { User } from "app/models/user";
import { Todo } from "app/models/todo";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
  providers: [TodosService]
})
export class TodosComponent {
  
  users: Observable<User[]>;
  todos: Observable<Todo[]>;
  selectedUser: string;

  loadingUsers: Observable<boolean>;
  loadingTodos: Observable<boolean>;

  constructor(private service: TodosService) { 
    this.users = this.service.getFbUsers();
    this.todos = this.service.getFbTodos();
    this.selectedUser = null;

    this.loadingUsers = this.service.getFireLoadingUsers();
    this.loadingTodos = this.service.getFireLoadingTodos();
  }

  onSelectUser(id: string) {
    this.service.loadFbTodos(id);
    this.selectedUser = id;
  }

}
