import { Action } from '@ngrx/store';

export const OPEN_SIDENAV = '[App-Side-Menu] Open Sidenav';
export const CLOSE_SIDENAV = '[App-Side-Menu] Close Sidenav';
export const TOGGLE_SIDENAV = '[App-Side-Menu] Toogle Sidenav';

export const SHOW_SPINNER = '[App-Side-Menu] Show Spinner';

export class OpenSidenavAction implements Action {
  readonly type = OPEN_SIDENAV;
}

export class CloseSidenavAction implements Action {
  readonly type = CLOSE_SIDENAV;
}

export class ToogleSidenavAction implements Action {
  readonly type = TOGGLE_SIDENAV;
}

export class ShowSpinnerAction implements Action {
  constructor(public payload: boolean){}
  readonly type = SHOW_SPINNER;
}

export type Actions
  = OpenSidenavAction
  | CloseSidenavAction
  | ToogleSidenavAction
  | ShowSpinnerAction;