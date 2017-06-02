// router-data.effects.ts
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Actions, Effect } from '@ngrx/effects';
import * as rootActions from '../actions';
import * as appActions from './app.actions';

import {  } from './app.actions';
import { of } from "rxjs/observable/of";

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions ) {
  }

  @Effect() 
    showWaitingBarAction$ = this.actions$
    .ofType(rootActions.Actions.homeFire.FB_LOAD_USERS,
            rootActions.Actions.homeFire.FB_LOAD_POSTS,
            rootActions.Actions.homeFire.FB_LOAD_TODOS)
    .switchMap(() => {
      return [
        new appActions.ShowWaitingBarAction(true)
      ];
    })    

  @Effect() 
    hideWaitingBarAction$ = this.actions$
    .ofType(rootActions.Actions.homeFire.FB_LOAD_USERS_FAILED,
            rootActions.Actions.homeFire.FB_LOAD_USERS_SUCCESS,
            rootActions.Actions.homeFire.FB_LOAD_POSTS_FAILED,
            rootActions.Actions.homeFire.FB_LOAD_POSTS_SUCCESS,
            rootActions.Actions.homeFire.FB_LOAD_TODOS_FAILED,
            rootActions.Actions.homeFire.FB_LOAD_TODOS_SUCCESS,)
    .switchMap(() => {
      return [
        new appActions.ShowWaitingBarAction(false)
      ];
    })    
}