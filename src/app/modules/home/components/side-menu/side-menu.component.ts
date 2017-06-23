import { Component, OnInit, Output, EventEmitter, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'home-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideMenuComponent implements OnInit {
  @Output() onSideMenuClick = new EventEmitter<string>();
  @Input() opened: boolean = false;
  
  constructor() { }

  ngOnInit() {
  }

  onSideMenuClicked(val: string) {
    this.onSideMenuClick.emit(val);
  }

}
