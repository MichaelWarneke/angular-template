import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { UsersService } from "app/modules/core/services/users.service";
import { TodosService } from "app/modules/core/services/todos.service";
import { HomeService } from "app/modules/core/services/home.service";
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

  constructor(private userService: UsersService,
              private todoService: TodosService,
              private homeService: HomeService) { 
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
