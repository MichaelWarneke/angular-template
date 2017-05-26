import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class PostsDbService {

  constructor(private http: Http) { }

  getPosts(): Observable<any[]>{
    return this.http.get("http://jsonplaceholder.typicode.com/posts")
                    .map((res:Response) => res.json())
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  getPostsByUser(id: number): Observable<any[]>{
    return this.http.get("http://jsonplaceholder.typicode.com/posts?userId=" +id)
                    .map((res:Response) => res.json())
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
}
