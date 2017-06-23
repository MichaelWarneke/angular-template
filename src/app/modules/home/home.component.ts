import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AppService } from "app/modules/core/services/app.service";
import { Observable } from "rxjs/Observable";
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']

})
export class HomeComponent implements OnInit {
  showSidenav$: Observable<boolean>;

  constructor(private appService: AppService,
              private router: Router) { 
    this.showSidenav$ = this.appService.getSideMenu();
  }

  ngOnInit() {
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
