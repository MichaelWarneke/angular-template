import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-waiting-bar',
  templateUrl: './waiting-bar.component.html',
  styleUrls: ['./waiting-bar.component.scss']
})
export class WaitingBarComponent implements OnInit {

  @Input() showWaitingBar: boolean;

  constructor() { }

  ngOnInit() {
  }

}
