import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from "rxjs/Subscription";
import { PostsService } from "app/modules/core/services/posts.service";
import { Observable } from "rxjs/Observable";
import { Post } from "app/models/Post";

@Component({
  selector: 'app-something',
  templateUrl: './something.component.html',
  styleUrls: ['./something.component.scss']
})
export class SomethingComponent implements OnInit, OnDestroy {

  posts: Observable<Post[]>;

  constructor(private postsService: PostsService) { 
    this.posts = postsService.getPosts();
  }

  ngOnInit() {
    // Load posts
    this.postsService.loadPosts(null);
  }

  ngOnDestroy() {
  }

  search(search: string) {
    console.log("Search : " +search);
    this.posts = this.postsService.getPosts().map(posts => posts.filter(post => post.title.includes(search)));
  }
}
