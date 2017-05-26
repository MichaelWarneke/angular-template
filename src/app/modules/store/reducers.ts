import { ActionReducer } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { combineReducers } from '@ngrx/store';
import { compose } from '@ngrx/core/compose';
import { createSelector } from 'reselect';

import { environment } from '../../../environments/environment';

import { State } from './states';

import * as AppReducer from './app/app.reducers';
import * as HomeReducer from './home/home.reducers';

export const reducers = {
  app: AppReducer.reducer,
  home: HomeReducer.reducer,
};


const developmentReducer: ActionReducer<State> = compose(storeFreeze, combineReducers)(reducers);
const productionReducer: ActionReducer<State> = combineReducers(reducers);


export function reducer(state: any, action: any) {
  console.log("Reducer : ", action.type);
  if (environment.production) {
    return productionReducer(state, action);
  }
  else {
    return developmentReducer(state, action);
  }
}

// App
export const getAppState = (state: State) => state.app;

export const getShowSidenav = createSelector(getAppState, AppReducer.getShowSidenav);

// Home
export const getHomeState = (state: State) => state.home;

export const getUsers = createSelector(getHomeState, HomeReducer.getUsers);
export const getPosts = createSelector(getHomeState, HomeReducer.getPosts);
export const getTodos = createSelector(getHomeState, HomeReducer.getTodos);

export const getselectedUserPosts = createSelector(getHomeState, HomeReducer.getselectedUserPosts);
export const getselectedUserTodos = createSelector(getHomeState, HomeReducer.getselectedUserTodos);