import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlockchainDemoComponent } from './blockchain-demo.component';

const routes: Routes = [
  {
    path: '',
    component: BlockchainDemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlockchainDemoRoutingModule { }
