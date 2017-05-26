import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { HttpModule } from '@angular/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from "../shared/shared.module";
import { PostsDbService } from "../../services/posts-db.service";
import { TodosDbService } from "../../services/todos-db.service";
import { UsersDbService } from "../../services/users-db.service";


@NgModule({
  imports: [
  ],
  exports: [
    SharedModule,
    BrowserAnimationsModule,
    HttpModule,
  ],
  declarations: [],
  providers: [
    PostsDbService,
    TodosDbService,
    UsersDbService
  ]
})
export class CoreModule {
  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }  
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
      ]
    };
  }
}
