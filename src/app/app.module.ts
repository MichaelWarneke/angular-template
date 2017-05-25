import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from "./app-routing.module";
import { CoreModule } from "./modules/core/core.module";

import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

//Material modules necessary for root (Toolbar)
import { MdButtonModule, MdToolbarModule, MdIconModule, MdMenuModule,MdListModule, MdSidenavModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    MdButtonModule, MdToolbarModule, MdIconModule, MdMenuModule,MdListModule, MdSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
