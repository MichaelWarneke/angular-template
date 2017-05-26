import { NgModule } from '@angular/core';
import { SharedModule } from "../shared/shared.module";
import { SomethingComponent } from './something.component';
import { SomethingRoutingModule } from "./something-routing.module";

// Material Modules neccessary for Sidenav
import { MdListModule, MdIconModule } from '@angular/material';

@NgModule({
  imports: [
    SharedModule,
    SomethingRoutingModule,
    MdListModule,MdIconModule
  ],
  declarations: [SomethingComponent]
})
export class SomethingModule { }
