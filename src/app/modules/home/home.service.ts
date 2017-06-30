import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { IAppService } from "app/modules/core/store.interface";
import { Router } from "@angular/router";

@Injectable()
export class HomeService {

  constructor(private appService: IAppService,
              private router: Router) { }

  getSideMenu() : Observable<boolean> {
    return this.appService.getSideMenu();
  }

  onSideMenuClick(val: string) {
    switch(val) {
      case "OpenSidenav": this.openSidenav(); break;
      case "CloseSidenav": this.closeSidenav(); break;
      case "Todos": this.router.navigate(['/home/todos']); break;
      case "Posts": this.router.navigate(['/home/posts']); break;
    }
  }

  closeSidenav() {
    this.appService.closeSideMenu();
  }

  openSidenav() {
    this.appService.openSideMenu();
  }

  toggleSidenav() {
    this.appService.toggleSideMenu();
  }  
}
