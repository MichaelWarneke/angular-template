import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";

import { Post } from "app/models/post";
import { AngularFireDatabase } from "angularfire2/database";

@Injectable()
export class PostsFbService {

  constructor(private db: AngularFireDatabase) { }

  getPostsByUser(key: string): Observable<Post[]>{
    console.log("getPostsByUser : " + key);
    if(key && key != "") {
      return this.db.list('/posts', {query: { orderByChild: 'userId', equalTo: key}} ).map(Post.fromJsonList);
    }
    return null;
  }
}
