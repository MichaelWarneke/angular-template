import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { FB_SERVICES } from "./services";

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { firebaseData } from '../../../../../firebase.data';

@NgModule({
  imports: [
    AngularFireModule.initializeApp(firebaseData),
    AngularFireDatabaseModule,
  ],
  declarations: [],
  providers: [
    FB_SERVICES
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
