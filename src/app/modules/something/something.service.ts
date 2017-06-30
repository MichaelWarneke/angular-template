import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";

import { IPostsService } from "app/modules/core/store.interface";

import { Post } from "app/models/Post";

@Injectable()
export class SomethingService {

  constructor(private postsService: IPostsService) { 

    // Load posts
    this.postsService.loadPosts(null);
  }

  getPosts() : Observable<Post[]> {
    return this.postsService.getPosts();
  }

  getPostBySearch(search: string) : Observable<Post[]> {
    return this.getPosts().map(posts => posts.filter(post => post.title.includes(search)));
  }
}
