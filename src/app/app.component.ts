import { Component, OnInit } from '@angular/core';
import { InitFbService } from "app/modules/db/db-firebase/services/init-fb.service";
import { Observable } from "rxjs/Observable";
import { AppService } from "app/modules/core/services/app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  showWaitingBar: Observable<boolean>;

  constructor(private appService: AppService,
              private initFbService: InitFbService){

    this.showWaitingBar = this.appService.getShowWaitingBar();
  }

  ngOnInit() {
//  Initialize the Firebase Database with the data from Http Server
//  Use only once
//    this.initFbService.loadDataFromHtml();
  }

  onMenuSelect(value: string) {
    console.log("Menu selected : " + value);
  }
}
