import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { User } from "app/models/user";

@Injectable()
export class UsersDbService {

  constructor(private http: Http) { }

  getUsers(id?: string): Observable<User[]>{
    return this.http.get("https://jsonplaceholder.typicode.com/users")
                    .map((res:Response) => res.json())
                    .map(User.fromJsonList)
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  getUser(id: string): Observable<User>{
    return this.http.get("https://jsonplaceholder.typicode.com/users/" + id)
                    .map((res:Response) => res.json())
                    .map(User.fromJson)
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
}
