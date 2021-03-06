import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { User } from "app/models/user";
import { AngularFireDatabase } from "angularfire2/database";
import { of } from "rxjs/observable/of";

@Injectable()
export abstract class UsersFbService {

  constructor(protected db: AngularFireDatabase) {}

  getUsers(): Observable<User[]>{
      return this.db.list('/users').map(User.fromJsonList);
  }

  getUser(key: string): Observable<User>{
    if(key && key != "") {
      return this.db.object('/users/' + key).map(User.fromJson);
    }
    return of(null);
  }
}
