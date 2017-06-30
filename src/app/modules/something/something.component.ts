import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from "rxjs/Subscription";

import { Observable } from "rxjs/Observable";
import { Post } from "app/models/Post";
import { SomethingService } from "./something.service";

@Component({
  selector: 'app-something',
  templateUrl: './something.component.html',
  styleUrls: ['./something.component.scss'],
  providers: [SomethingService]
})
export class SomethingComponent {

  posts: Observable<Post[]>;

  constructor(private service: SomethingService) { 
    this.posts = this.service.getPosts();

  }

  search(search: string) {
    this.posts = this.service.getPostBySearch(search);
  }
}
