import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Cmp1Component } from './cmp1/cmp1.component';
import { Cmp2Component } from './cmp2/cmp2.component';

const routes: Routes = [ //table de routage
   { path:"" , redirectTo: "cmp1" , pathMatch: "full"},  //route vide
   { path:"cmp1" , component : Cmp1Component},
   { path:"cmp2" , component : Cmp2Component},
   { path:"**" , component : Cmp2Component} // route par défaut
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
