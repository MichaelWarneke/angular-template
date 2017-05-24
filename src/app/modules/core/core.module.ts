import { NgModule, Optional, SkipSelf } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from "app/modules/shared/shared.module";
import { AppRoutingModule } from "app/app-routing.module";


@NgModule({
  imports: [
  ],
  exports: [
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
  ],
  declarations: []
})
export class CoreModule {
  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }  
}
