import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MdProgressSpinnerModule } from '@angular/material';

import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { WaitingSpinnerComponent } from './components/waiting-spinner/waiting-spinner.component';

@NgModule({
  imports: [
    CommonModule,
    MdProgressSpinnerModule
  ],
  exports: [
    CommonModule,
    PageNotFoundComponent,
    WaitingSpinnerComponent,
    FlexLayoutModule,
  ],
  declarations: [
    PageNotFoundComponent,
    WaitingSpinnerComponent
  ]
})
export class SharedModule { }
