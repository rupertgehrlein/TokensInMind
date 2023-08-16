import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NonceTestComponent } from './nonce-test.component';


const routes: Routes = [
  {
    path: '',
    component: NonceTestComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NonceTestRoutingModule { }
