import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlockDemoComponent } from './block-demo.component';

const routes: Routes = [
  {
    path: '',
    component: BlockDemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlockDemoRoutingModule { }
