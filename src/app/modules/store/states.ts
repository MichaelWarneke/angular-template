import * as AppState from './app/app.states';
import * as HomeState from './home/home.states';

export interface State {
  app: AppState.State;
  home: HomeState.State;
}