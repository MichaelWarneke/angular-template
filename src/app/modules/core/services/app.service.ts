import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Store } from "@ngrx/store";
import * as States from 'app/modules/store/states';
import * as Reducers from 'app/modules/store/reducers';
import * as Actions from 'app/modules/store/actions';
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

  getShowSpinner(): Observable<boolean> {
    return this.store.select(Reducers.getShowSpinner);
  }

  showSpinner(showSpinner: boolean) {
    this.store.dispatch(new Actions.Actions.app.ShowSpinnerAction(showSpinner));
  }
}
