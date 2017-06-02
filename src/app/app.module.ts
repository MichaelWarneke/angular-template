import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from "./app-routing.module";
import { CoreModule } from "./modules/core/core.module";

import { AppComponent } from './app.component';
import { RootModule } from "app/modules/root/root.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule.forRoot(),
    RootModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
