import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'home-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {
  @Output() onSideMenuClick = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

}
