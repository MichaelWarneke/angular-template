import { NgModule } from '@angular/core';
import { SharedModule } from "app/modules/shared/shared.module";
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from "app/modules/home/home-routing.module";

@NgModule({
  imports: [
    SharedModule,
    HomeRoutingModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
