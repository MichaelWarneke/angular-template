import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";

import { Post } from "app/models/post";
import { AngularFireDatabase } from "angularfire2/database";
import { of } from "rxjs/observable/of";

@Injectable()
export abstract class PostsFbService {

  constructor(protected db: AngularFireDatabase) { }

  getPostsByUser(key: string): Observable<Post[]>{
    if(key && key != "") {
      return this.db.list('/posts', {query: { orderByChild: 'userId', equalTo: key}} ).map(Post.fromJsonList);
    }
    return of(null);
  }
}
