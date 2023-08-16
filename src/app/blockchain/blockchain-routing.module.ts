import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlockchainHomeComponent } from './blockchain-home/blockchain-home.component';

const routes: Routes = [
  {
    path: '',
    component: BlockchainHomeComponent
  },
  {
    path: 'block-demo',
    loadChildren: () => import('./block-demo/block-demo.module').then(m => m.BlockDemoModule)
  },
  {
    path: 'blockchain-demo',
    loadChildren: () => import('./blockchain-demo/blockchain-demo.module').then(m => m.BlockchainDemoModule)
  },
  {
    path: 'nonce-test',
    loadChildren: () => import('./nonce-test/nonce-test.module').then(m => m.NonceTestModule)
  },
  {
    path: 'hash-demo',
    loadChildren: () => import('./hash-demo/hash-demo.module').then(m => m.HashDemoModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlockchainRoutingModule { }
