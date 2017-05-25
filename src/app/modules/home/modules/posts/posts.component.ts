import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from "rxjs/Subscription";
import { UsersDbService } from "../../../../services/users-db.service";
import { PostsDbService } from "../../../../services/posts-db.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit, OnDestroy {

  users: any[];
  posts: any[];
  subs: Subscription[];

  constructor(private userService: UsersDbService,
              private postService: PostsDbService) { 
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
    // Get all comments
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
    this.subs.push(this.postService.getPostsByUser(id)
                .subscribe(
                    posts => this.posts = posts, //Bind to view
                    err => {
                        // Log errors if any
                        console.log(err);
                    }));  
  }

}
