import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home.component";
import { PageNotFoundComponent } from "../../components/page-not-found/page-not-found.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', redirectTo: 'posts', pathMatch: 'full'},
      {
        path: 'posts',
        loadChildren: './modules/posts/posts.module#PostsModule'
      },
      {
        path: 'todos',
        loadChildren: './modules/todos/todos.module#TodosModule'
      },
      { path: '**' , component: PageNotFoundComponent}
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
