import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'app/modules/shared/shared.module';

//Material modules necessary for root (Toolbar)
import { MdProgressBarModule, MdButtonModule, MdToolbarModule, MdIconModule, MdMenuModule,MdListModule, MdSidenavModule } from '@angular/material';

import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { WaitingBarComponent } from './components/waiting-bar/waiting-bar.component';
import { RootComponent } from './components/root/root.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule,
    MdProgressBarModule, MdButtonModule, MdToolbarModule, MdIconModule, MdMenuModule,MdListModule, MdSidenavModule
  ],
  exports: [
    RootComponent
  ],
  declarations: [
    ToolbarComponent,
    WaitingBarComponent,
    RootComponent,
  ],
})
export class RootModule { }
