import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  @Output() onMenuClick: EventEmitter<string> = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit() {
  }

}
