import { NgModule } from '@angular/core';
import { SharedModule } from "app/modules/shared/shared.module";
import { SomethingComponent } from './something.component';
import { SomethingRoutingModule } from "app/modules/something/something-routing.module";

@NgModule({
  imports: [
    SharedModule,
    SomethingRoutingModule
  ],
  declarations: [SomethingComponent]
})
export class SomethingModule { }
