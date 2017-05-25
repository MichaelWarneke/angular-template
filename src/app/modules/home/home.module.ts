import { NgModule } from '@angular/core';
import { SharedModule } from "../shared/shared.module";
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from "./home-routing.module";

// Material Modules neccessary for Sidenav
import { MdButtonModule, MdIconModule, MdListModule, MdSidenavModule } from '@angular/material';
import { SideMenuComponent } from './components/side-menu/side-menu.component';

@NgModule({
  imports: [
    SharedModule,
    HomeRoutingModule,
    MdButtonModule, MdIconModule, MdListModule, MdSidenavModule
  ],
  declarations: [HomeComponent, SideMenuComponent]
})
export class HomeModule { }
