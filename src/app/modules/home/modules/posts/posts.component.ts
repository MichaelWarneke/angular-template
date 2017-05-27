import { Component, OnInit, OnDestroy } from '@angular/core';
import { UsersService } from "app/modules/core/services/users.service";
import { PostsService } from "app/modules/core/services/posts.service";
import { Observable } from "rxjs/Observable";
import { User } from "app/models/user";
import { Post } from "app/models/post";
import { HomeService } from "app/modules/core/services/home.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit, OnDestroy {

  users: Observable<User[]>;
  posts: Observable<Post[]>;
  selectedUser: Observable<User>;

  constructor(private userService: UsersService,
              private postService: PostsService,
              private homeService: HomeService) { 
    this.users = this.userService.getFbUsers();
    this.posts = this.postService.getFbPosts();
    this.selectedUser = this.homeService.getFbSelectedUserPosts();
  }

  ngOnInit() {
    // Load users
    this.userService.loadFbUsers();
  }

  ngOnDestroy() {
  }

  onSelectUser(id: string) {
    this.homeService.changeFbSelectedUserPosts(id);
  }

}
