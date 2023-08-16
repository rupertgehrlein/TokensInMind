import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NftHomeComponent } from './nft-home/nft-home.component';

const routes: Routes = [
  {
    path: '',
    component: NftHomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NftRoutingModule { }
