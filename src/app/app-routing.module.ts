import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './home/home.component';
import {InfoComponent} from './home/info/info.component';



const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'info', component: InfoComponent},
    { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
