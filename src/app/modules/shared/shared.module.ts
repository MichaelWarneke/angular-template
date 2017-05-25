import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { PageNotFoundComponent } from "../../components/page-not-found/page-not-found.component";

@NgModule({
  imports: [
  ],
  exports: [
    CommonModule,
    PageNotFoundComponent,

    ReactiveFormsModule,
    FlexLayoutModule,
  ],
  declarations: [
    PageNotFoundComponent
  ]
})
export class SharedModule { }
