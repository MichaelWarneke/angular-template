import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from "./app-routing.module";
import { CoreModule } from "./modules/core/core.module";

import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

//Material modules necessary for root (Toolbar)
import { MdProgressBarModule, MdButtonModule, MdToolbarModule, MdIconModule, MdMenuModule,MdListModule, MdSidenavModule } from '@angular/material';
import { WaitingSpinnerComponent } from './components/waiting-spinner/waiting-spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    WaitingSpinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    MdProgressBarModule, MdButtonModule, MdToolbarModule, MdIconModule, MdMenuModule,MdListModule, MdSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
