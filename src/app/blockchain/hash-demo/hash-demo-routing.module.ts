import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HashDemoComponent } from './hash-demo.component';

const routes: Routes = [
  {
    path: '',
    component: HashDemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HashDemoRoutingModule { }
