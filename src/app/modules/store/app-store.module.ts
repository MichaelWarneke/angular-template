import { NgModule, ModuleWithProviders } from '@angular/core';

// ngrx
import { StoreModule } from '@ngrx/store';
import { RouterStoreModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { reducer } from './reducers';
import { AppEffects, HomeEffects } from './effects';
import { DbModule } from "app/modules/db/db.module";


@NgModule({
  imports: [
    DbModule,
// NGRX
    StoreModule.provideStore(reducer),
    RouterStoreModule.connectRouter(),
    StoreDevtoolsModule.instrumentOnlyWithExtension({maxAge: 15}),
// Effects
    EffectsModule.run(AppEffects),
    EffectsModule.run(HomeEffects),
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
