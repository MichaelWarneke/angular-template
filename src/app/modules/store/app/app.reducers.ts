import '@ngrx/core/add/operator/select';
import * as Actions from './app.actions';
import { initialState, State } from './app.states';

export function reducer(state = initialState, action: Actions.Actions): State {
  switch (action.type) {
    case Actions.CLOSE_SIDENAV:
      return {
        ...state,
          showSidenav: false,
      }
    case Actions.OPEN_SIDENAV:
      return {
        ...state,
        showSidenav: true,
      }
    case Actions.TOGGLE_SIDENAV:
      return {
        ...state,
        showSidenav: !state.showSidenav,
      }
    case Actions.SHOW_WAITING_BAR:
      return {
        ...state,
        showWaitingBar: action.payload,
      }
    default:
      return state;
  }
}

export const getShowSidenav = (state: State) => state.showSidenav;
export const getShowWaitingBar = (state: State) => state.showWaitingBar;
