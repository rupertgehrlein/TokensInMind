import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Sha256Component } from './sha256.component';

const routes: Routes = [
  {
    path: '',
    component: Sha256Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Sha256RoutingModule { }
