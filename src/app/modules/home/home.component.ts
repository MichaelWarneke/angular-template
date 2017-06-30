import { Component, ChangeDetectionStrategy } from '@angular/core';

import { Observable } from "rxjs/Observable";
import { HomeService } from "./home.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [HomeService]

})
export class HomeComponent {
  showSidenav$: Observable<boolean>;

  constructor(private service: HomeService) { 
    this.showSidenav$ = this.service.getSideMenu();
  }

  onSideMenuClick(val: string) {
    this.service.onSideMenuClick(val);
  }
  closeSidenav() {
    this.service.closeSidenav();
  }

  openSidenav() {
    this.service.openSidenav();
  }

  toggleSidenav() {
    this.service.toggleSidenav();
  }  
}
