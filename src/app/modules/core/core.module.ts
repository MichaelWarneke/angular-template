import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { HttpModule } from '@angular/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SERVICES } from "./services";

import { AppStoreModule } from '../store/app-store.module';


@NgModule({
  imports: [
    AppStoreModule.forRoot(),
  ],
  exports: [
    BrowserAnimationsModule,
    HttpModule,
  ],
  declarations: [],
  providers: [
    SERVICES,
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
