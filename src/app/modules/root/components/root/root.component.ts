import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { RootService } from "./root.service";


@Component({
  selector: 'app-root-component',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss'],
  providers: [RootService]
})
export class RootComponent {

  showWaitingBar$: Observable<boolean>;

  constructor(private service: RootService) {
    this.showWaitingBar$ = this.service.getShowWaitingBar();
  }
  
  onMenuSelect(value: string) {
    console.log("Menu selected : " + value);
  }
}
