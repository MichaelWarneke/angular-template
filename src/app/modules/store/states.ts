import * as AppState from './app/app.states';
import * as HomeState from './home/home.states';
import * as HomeFireState from './home-firebase/home-firebase.states';

export interface State {
  app: AppState.State;
  home: HomeState.State;
  homeFire: HomeFireState.State;
}