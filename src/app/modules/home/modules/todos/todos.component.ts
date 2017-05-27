import { Component, OnInit, OnDestroy } from '@angular/core';
import { UsersService } from "app/modules/core/services/users.service";
import { TodosService } from "app/modules/core/services/todos.service";
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

  constructor(private userService: UsersService,
              private todoService: TodosService) { 
    this.users = this.userService.getFbUsers();
    this.todos = this.todoService.getFbTodos();
    this.selectedUser = null;
  }

  ngOnInit() {
    // Load users
    this.userService.loadFbUsers();
  }

  ngOnDestroy() {

  }

  onSelectUser(id: string) {
    this.todoService.loadFbTodos(id);
    this.selectedUser = id;
  }

}
