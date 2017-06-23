import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-waiting-spinner',
  templateUrl: './waiting-spinner.component.html',
  styleUrls: ['./waiting-spinner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WaitingSpinnerComponent implements OnInit {

  @Input() showSpinner: boolean;

  constructor() { 
  }

  ngOnInit() {
  }

}
