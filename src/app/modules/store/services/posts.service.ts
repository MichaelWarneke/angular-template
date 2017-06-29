import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";

import { Store } from "@ngrx/store";
import * as States from '../states';
import * as Reducers from '../reducers';
import * as Actions from '../actions';
import { Post } from "app/models/Post";

@Injectable()
export class PostsService {

  constructor(private store: Store<States.State>) { 
              
  }
// Http
  getPosts(): Observable<Post[]>{
    return this.store.select(Reducers.getPosts);
  }

  loadPosts(userId: string) {
    this.store.dispatch(new Actions.Actions.home.LoadPostsAction(userId));
  }

// Firebase 
  getFbPosts(): Observable<Post[]>{
    return this.store.select(Reducers.getFirePosts);
  }

  loadFbPosts(userId: string) {
    this.store.dispatch(new Actions.Actions.homeFire.LoadPostsAction(userId));
  }
}
