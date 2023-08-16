import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NftRoutingModule } from './nft-routing.module';
import { NftHomeComponent } from './nft-home/nft-home.component';


@NgModule({
  declarations: [
    NftHomeComponent
  ],
  imports: [
    CommonModule,
    NftRoutingModule
  ]
})
export class NftModule { }
