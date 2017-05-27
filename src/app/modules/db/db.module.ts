import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { DB_SERVICES } from "./services";


@NgModule({
  imports: [
  ],
  declarations: [],
  providers: [
    DB_SERVICES,
  ]
})
export class DbModule { 
  constructor (@Optional() @SkipSelf() parentModule: DbModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DbModule,
    };
  }  
}