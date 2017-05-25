import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from "rxjs/Subscription";
import { UsersDbService } from "../../../../services/users-db.service";
import { TodosDbService } from "../../../../services/todos-db.service";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit, OnDestroy {
  
  users: any[];
  todos: any[];
  subs: Subscription[];
  
  constructor(private userService: UsersDbService,
              private todoService: TodosDbService) { 
    this.subs = new Array<Subscription>();
  }

  ngOnInit() {
    // Load users
    this.loadUsers();
  }

  ngOnDestroy() {
    this.subs.forEach(sub => sub.unsubscribe());
  }
  
  loadUsers(){
    // Get all Users
    this.subs.push(this.userService.getUsers()
                .subscribe(
                    users => this.users = users, //Bind to view
                    err => {
                        // Log errors if any
                        console.log(err);
                    }));  
  }

  onSelectUser(id: number) {
    this.loadTodos(id);
  }

  loadTodos(id: number) {
    // Get all Users
    this.subs.push(this.todoService.getTodosByUser(id)
                .subscribe(
                    todos => this.todos = todos, //Bind to view
                    err => {
                        // Log errors if any
                        console.log(err);
                    }));  
  }
}
