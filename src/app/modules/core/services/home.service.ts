import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Store } from "@ngrx/store";
import * as States from 'app/modules/store/states';
import * as Reducers from 'app/modules/store/reducers';
import * as Actions from 'app/modules/store/actions';
import { User } from "app/models/user";

@Injectable()
export class HomeService {

  constructor(private store: Store<States.State>) { 
              
  }

  getSelectedUserPosts(): Observable<User> {
    return this.store.select(Reducers.getselectedUserPosts);
  }

  changeSelectedUserPosts(userId: number) {
    this.store.dispatch(new Actions.Actions.home.ChangeSelectedUserPostsAction(userId));
  }

}
