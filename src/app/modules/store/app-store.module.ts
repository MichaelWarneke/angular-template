import { NgModule, ModuleWithProviders } from '@angular/core';

// ngrx
import { StoreModule } from '@ngrx/store';
import { RouterStoreModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { reducer } from './reducers';
import { AppEffects, HomeEffects, HomeFireEffects } from './effects';
import { DbModule } from "app/modules/db/db.module";
import { DbFirebaseModule } from "app/modules/db/db-firebase/db-firebase.module";


@NgModule({
  imports: [
    DbModule.forRoot(),
    DbFirebaseModule.forRoot(),
// NGRX
    StoreModule.provideStore(reducer),
    RouterStoreModule.connectRouter(),
    StoreDevtoolsModule.instrumentOnlyWithExtension({maxAge: 15}),
// Effects
    EffectsModule.run(AppEffects),
    EffectsModule.run(HomeEffects),
    EffectsModule.run(HomeFireEffects),
  ],
  declarations: []
})
export class AppStoreModule { 
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AppStoreModule,
      providers: []
    };
  }
}
