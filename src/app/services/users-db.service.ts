import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class UsersDbService {

  constructor(private http: Http) { }

  getUsers(): Observable<any[]>{
    return this.http.get("http://jsonplaceholder.typicode.com/users")
                    .map((res:Response) => res.json())
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
}
