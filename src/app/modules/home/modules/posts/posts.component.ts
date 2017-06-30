import { Component, ChangeDetectionStrategy } from '@angular/core';

import { Observable } from "rxjs/Observable";
import { User } from "app/models/user";
import { Post } from "app/models/post";
import { PostsService } from "./posts.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
  providers: [PostsService]
})
export class PostsComponent {

  users: Observable<User[]>;
  posts: Observable<Post[]>;
  selectedUser: Observable<User>;

  loadingUsers: Observable<boolean>;
  loadingPosts: Observable<boolean>;

  constructor(private service: PostsService) { 
    this.users = this.service.getFbUsers();

    this.posts = this.service.getFbPosts();
    this.selectedUser = this.service.getFbSelectedUserPosts();

    this.loadingUsers = this.service.getFireLoadingUsers();
    this.loadingPosts = this.service.getFireLoadingPosts();


  }

  onSelectUser(id: string) {
    this.service.changeFbSelectedUserPosts(id);
  }

}
