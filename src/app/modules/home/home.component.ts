import { Component, OnInit } from '@angular/core';
import { AppService } from "app/modules/core/services/app.service";
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  showSidenav$: Observable<boolean>;
  
  constructor(private appService: AppService) { 
    this.showSidenav$ = this.appService.getSideMenu();
  }

  ngOnInit() {
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
