import { NgModule } from '@angular/core';
import { SharedModule } from "../../../shared/shared.module";

// Material Modules neccessary for Sidenav
import { MdListModule, MdIconModule } from '@angular/material';

import { TodosRoutingModule } from './todos-routing.module';
import { TodosComponent } from './todos.component';

@NgModule({
  imports: [
    SharedModule,
    TodosRoutingModule,
    MdListModule, MdIconModule
  ],
  declarations: [TodosComponent]
})
export class TodosModule { }
