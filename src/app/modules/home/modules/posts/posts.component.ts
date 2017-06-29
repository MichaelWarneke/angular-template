import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { IUsersService, IPostsService, IHomeService } from "app/modules/core/store.interface";
import { Observable } from "rxjs/Observable";
import { User } from "app/models/user";
import { Post } from "app/models/post";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit, OnDestroy {

  users: Observable<User[]>;
  posts: Observable<Post[]>;
  selectedUser: Observable<User>;

  loadingUsers: Observable<boolean>;
  loadingPosts: Observable<boolean>;

  constructor(private userService: IUsersService,
              private postService: IPostsService,
              private homeService: IHomeService) { 
    this.users = this.userService.getFbUsers();

    this.posts = this.postService.getFbPosts();
    this.selectedUser = this.homeService.getFbSelectedUserPosts();

    this.loadingUsers = this.homeService.getFireLoadingUsers();
    this.loadingPosts = this.homeService.getFireLoadingPosts();

    // Load users
    this.userService.loadFbUsers();
  }

  ngOnInit() {

  }

  ngOnDestroy() {
  }

  onSelectUser(id: string) {
    this.homeService.changeFbSelectedUserPosts(id);
  }

}
