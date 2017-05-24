import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreModule } from "app/modules/core/core.module";

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
    CoreModule,
    MdButtonModule, MdToolbarModule, MdIconModule, MdMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
