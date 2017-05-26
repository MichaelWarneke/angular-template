import '@ngrx/core/add/operator/select';
import * as Actions from './app.actions';
import { initialState, State } from './app.states';

export function reducer(state = initialState, action: Actions.Actions): State {
  switch (action.type) {
    case Actions.CLOSE_SIDENAV:
      return Object.assign({}, state, {
          showSidenav: false,
      })
    case Actions.OPEN_SIDENAV:
      return Object.assign({}, state, {
        showSidenav: true,
      })
    case Actions.TOGGLE_SIDENAV:
      return Object.assign({}, state, {
        showSidenav: !state.showSidenav,
      });
    default:
      return state;
  }
}

export const getShowSidenav = (state: State) => state.showSidenav;
