import { Action } from '@ngrx/store';

export const OPEN_SIDENAV = '[App-Side-Menu] Open Sidenav';
export const CLOSE_SIDENAV = '[App-Side-Menu] Close Sidenav';
export const TOGGLE_SIDENAV = '[App-Side-Menu] Toogle Sidenav';

export const SHOW_WAITING_BAR = '[App-Side-Menu] Show Waiting Bar';

export class OpenSidenavAction implements Action {
  readonly type = OPEN_SIDENAV;
}

export class CloseSidenavAction implements Action {
  readonly type = CLOSE_SIDENAV;
}

export class ToogleSidenavAction implements Action {
  readonly type = TOGGLE_SIDENAV;
}

export class ShowWaitingBarAction implements Action {
  constructor(public payload: boolean){}
  readonly type = SHOW_WAITING_BAR;
}

export type Actions
  = OpenSidenavAction
  | CloseSidenavAction
  | ToogleSidenavAction
  | ShowWaitingBarAction;