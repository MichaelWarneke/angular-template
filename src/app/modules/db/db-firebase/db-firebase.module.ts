import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { FB_SERVICES } from "./services";

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../../../../environments/environment';

@NgModule({
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
  ],
  declarations: [],
  providers: [
    FB_SERVICES,
  ]  
})
export class DbFirebaseModule {
  constructor (@Optional() @SkipSelf() parentModule: DbFirebaseModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DbFirebaseModule,
    };
  }    
}
