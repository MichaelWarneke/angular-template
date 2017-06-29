import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { IAppService } from "app/modules/core/store.interface";

@Component({
  selector: 'app-root-component',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit {

  showWaitingBar$: Observable<boolean>;

  constructor(private appService: IAppService) {
    this.showWaitingBar$ = this.appService.getShowWaitingBar();
  }

  ngOnInit() {
  }
  
  onMenuSelect(value: string) {
    console.log("Menu selected : " + value);
  }
}
