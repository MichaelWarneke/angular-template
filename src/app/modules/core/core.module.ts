import { NgModule, Optional, SkipSelf } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from "../shared/shared.module";


@NgModule({
  imports: [
  ],
  exports: [
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
