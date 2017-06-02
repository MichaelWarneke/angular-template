//import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { NgModule }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './modules/shared/components/page-not-found/page-not-found.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', loadChildren: './modules/home/home.module#HomeModule' },
  { path: 'something', loadChildren: './modules/something/something.module#SomethingModule' },
  { path: '**' , component: PageNotFoundComponent}
];

@NgModule({
  imports:[
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule{}