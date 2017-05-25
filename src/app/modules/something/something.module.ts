import { NgModule } from '@angular/core';
import { SharedModule } from "../shared/shared.module";
import { SomethingComponent } from './something.component';
import { SomethingRoutingModule } from "./something-routing.module";

@NgModule({
  imports: [
    SharedModule,
    SomethingRoutingModule
  ],
  declarations: [SomethingComponent]
})
export class SomethingModule { }
