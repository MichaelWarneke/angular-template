import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Store } from "@ngrx/store";
import * as States from '../states';
import * as Reducers from '../reducers';
import * as Actions from '../actions';
import { Post } from "app/models/Post";

@Injectable()
export class AppService {

  constructor(private store: Store<States.State>) { 
              
  }

  getSideMenu(): Observable<boolean> {
    return this.store.select(Reducers.getShowSidenav);
  }

  closeSideMenu() {
    this.store.dispatch(new Actions.Actions.app.CloseSidenavAction());
  }

  openSideMenu() {
    this.store.dispatch(new Actions.Actions.app.OpenSidenavAction());
  }

  toggleSideMenu() {
    this.store.dispatch(new Actions.Actions.app.ToogleSidenavAction());
  }

  getShowWaitingBar(): Observable<boolean> {
    return this.store.select(Reducers.getShowWaitingBar);
  }

  showWaitingBar(showWaitingBar: boolean) {
    this.store.dispatch(new Actions.Actions.app.ShowWaitingBarAction(showWaitingBar));
  }
}
