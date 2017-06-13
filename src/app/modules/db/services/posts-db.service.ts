import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Post } from "../../../models/post";

@Injectable()
export class PostsDbService {

  constructor(private http: Http) { }

  getPosts(id?: string): Observable<Post[]>{
    if(id && id != "" && id !="0") {
      return this.getPostsByUser(id);
    }

    return this.http.get("https://jsonplaceholder.typicode.com/posts")
                    .map((res:Response) => res.json())
                    .map(Post.fromJsonList)
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  getPostsByUser(id: string): Observable<Post[]>{
    return this.http.get("https://jsonplaceholder.typicode.com/posts?userId=" +id)
                    .map((res:Response) => res.json())
                    .map(Post.fromJsonList)
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
}
