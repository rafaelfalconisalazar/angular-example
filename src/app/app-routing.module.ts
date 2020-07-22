import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {QsComponent} from './qs/qs.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:QsComponent.URL,component:QsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
