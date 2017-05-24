import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from "app/modules/shared/shared.module";

import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

//Material modules necessary for root (Toolbar)
import { MdButtonModule, MdToolbarModule, MdIconModule, MdMenuModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    BrowserAnimationsModule,
    MdButtonModule, MdToolbarModule, MdIconModule, MdMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
