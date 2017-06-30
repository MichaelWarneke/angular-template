import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";

import { IUsersService, IPostsService, IHomeService } from "app/modules/core/store.interface";
import { User } from "app/models/user";
import { Post } from "app/models/post";

@Injectable()
export class PostsService {

  constructor(private userService: IUsersService,
              private postService: IPostsService,
              private homeService: IHomeService) { 

    // Load users
    this.userService.loadFbUsers();
  }

  getFbUsers() : Observable<User[]>{
    return this.userService.getFbUsers();
  }

  getFbPosts() : Observable<Post[]>{
    return this.postService.getFbPosts();
  }

  getFbSelectedUserPosts() : Observable<User>{
    return this.homeService.getFbSelectedUserPosts();
  }

  getFireLoadingUsers() : Observable<boolean>{
    return this.homeService.getFireLoadingUsers();
  }

  getFireLoadingPosts() : Observable<boolean>{
    return this.homeService.getFireLoadingPosts();
  }

  changeFbSelectedUserPosts(id: string) {
    this.homeService.changeFbSelectedUserPosts(id);
  }
}
