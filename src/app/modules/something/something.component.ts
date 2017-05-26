import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostsDbService } from "../../services/posts-db.service";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-something',
  templateUrl: './something.component.html',
  styleUrls: ['./something.component.css']
})
export class SomethingComponent implements OnInit, OnDestroy {

  posts: any[];
  subs: Subscription[];

  constructor(private service: PostsDbService) { 
    this.subs = new Array<Subscription>();
  }

  ngOnInit() {
    // Load posts
    this.loadPosts()
  }

  ngOnDestroy() {
    this.subs.forEach(sub => sub.unsubscribe());
  }

  loadPosts(){
    // Get all comments
    this.subs.push(this.service.getPosts()
                .subscribe(
                    posts => this.posts = posts, //Bind to view
                    err => {
                        // Log errors if any
                        console.log(err);
                    }));  
  }

}
