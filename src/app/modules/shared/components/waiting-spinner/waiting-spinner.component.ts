import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-waiting-spinner',
  templateUrl: './waiting-spinner.component.html',
  styleUrls: ['./waiting-spinner.component.scss']
})
export class WaitingSpinnerComponent implements OnInit {

  @Input() showSpinner: boolean;

  constructor() { 
  }

  ngOnInit() {
  }

}
