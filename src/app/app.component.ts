import { Component, OnInit } from '@angular/core';
//import { InitFbService } from "app/modules/db/db-firebase/services/init-fb.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  constructor(/*private initFbService: InitFbService*/){

  }

  ngOnInit() {
//  Initialize the Firebase Database with the data from Http Server
//  Use only once
//    this.initFbService.loadDataFromHtml();
  }
}
