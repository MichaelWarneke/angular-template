import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { AppService } from "app/modules/core/services/app.service";

@Component({
  selector: 'app-root-component',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit {

  showWaitingBar: Observable<boolean>;

  constructor(private appService: AppService) {

    this.showWaitingBar = this.appService.getShowWaitingBar();
  }

  ngOnInit() {
  }
  
  onMenuSelect(value: string) {
    console.log("Menu selected : " + value);
  }
}
