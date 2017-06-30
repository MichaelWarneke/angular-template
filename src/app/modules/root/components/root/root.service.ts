import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { IAppService } from "app/modules/core/store.interface";

@Injectable()
export class RootService {

  constructor(private appService: IAppService) { }

  getShowWaitingBar() : Observable<boolean> {
    return this.appService.getShowWaitingBar();
  }
}
