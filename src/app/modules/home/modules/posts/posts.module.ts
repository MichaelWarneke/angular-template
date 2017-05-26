import { NgModule } from '@angular/core';
import { SharedModule } from "../../../shared/shared.module";

// Material Modules neccessary for Sidenav
import { MdListModule, MdCardModule, MdIconModule } from '@angular/material';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts.component';

@NgModule({
  imports: [
    SharedModule,
    PostsRoutingModule,
    MdListModule, MdCardModule, MdIconModule
  ],
  declarations: [PostsComponent]
})
export class PostsModule { }
