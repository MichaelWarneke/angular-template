import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-waiting-bar',
  templateUrl: './waiting-bar.component.html',
  styleUrls: ['./waiting-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WaitingBarComponent implements OnInit {

  @Input() showWaitingBar: boolean;

  constructor() { }

  ngOnInit() {
  }

}
