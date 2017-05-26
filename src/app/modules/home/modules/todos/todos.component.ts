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
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit, OnDestroy {
  
  users: Observable<User[]>;
  todos: Observable<Todo[]>;
  selectedUser: number;

  constructor(private userService: UsersService,
              private todoService: TodosService) { 
    this.users = this.userService.getUsers();
    this.todos = this.todoService.getTodos();
  }

  ngOnInit() {
    // Load users
    this.userService.loadUsers(0);
  }

  ngOnDestroy() {

  }

  onSelectUser(id: number) {
    this.todoService.loadTodos(id);
    this.selectedUser = id;
  }

}
