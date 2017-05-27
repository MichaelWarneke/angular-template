import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { HttpModule } from '@angular/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from "../shared/shared.module";
import { SERVICES } from "./services";

import { AppStoreModule } from '../store/app-store.module';
import { DbFirebaseModule } from "app/modules/db/db-firebase/db-firebase.module";

@NgModule({
  imports: [
    AppStoreModule.forRoot(),
    DbFirebaseModule.forRoot(),
  ],
  exports: [
    SharedModule,
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
