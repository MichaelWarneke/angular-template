import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { IUsersService, ITodosService, IHomeService } from "app/modules/core/store.interface";
import { Subscription } from "rxjs/Subscription";
import { Observable } from "rxjs/Observable";
import { User } from "app/models/user";
import { Todo } from "app/models/todo";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit, OnDestroy {
  
  users: Observable<User[]>;
  todos: Observable<Todo[]>;
  selectedUser: string;

  loadingUsers: Observable<boolean>;
  loadingTodos: Observable<boolean>;

  constructor(private userService: IUsersService,
              private todoService: ITodosService,
              private homeService: IHomeService) { 
    this.users = this.userService.getFbUsers();
    this.todos = this.todoService.getFbTodos();
    this.selectedUser = null;

    this.loadingUsers = this.homeService.getFireLoadingUsers();
    this.loadingTodos = this.homeService.getFireLoadingTodos();

    // Load users
    this.userService.loadFbUsers();
  }

  ngOnInit() {
  }

  ngOnDestroy() {

  }

  onSelectUser(id: string) {
    this.todoService.loadFbTodos(id);
    this.selectedUser = id;
  }

}
