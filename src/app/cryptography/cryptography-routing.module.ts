import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CryptographyHomeComponent } from './cryptography-home/cryptography-home.component';

const routes: Routes = [
  {
    path: '',
    component: CryptographyHomeComponent
  },
  {
    path: 'sha256',
    loadChildren: () => import('./sha256/sha256.module').then(m => m.Sha256Module),
  },
  {
    path: 'block-demo',
    loadChildren: () => import('../blockchain/block-demo/block-demo.module').then(m => m.BlockDemoModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CryptographyRoutingModule { }
