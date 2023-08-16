import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlockchainRoutingModule } from './blockchain-routing.module';
import { BlockchainHomeComponent } from './blockchain-home/blockchain-home.component';
import { BlockDemoComponent } from './block-demo/block-demo.component';
import { BlockchainDemoComponent } from './blockchain-demo/blockchain-demo.component';
import { SingleBlockComponent } from './single-block/single-block.component';
import { NonceTestComponent } from './nonce-test/nonce-test.component';
import { HashDemoComponent } from './hash-demo/hash-demo.component';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    BlockchainHomeComponent,
    BlockDemoComponent,
    BlockchainDemoComponent,
    SingleBlockComponent,
    NonceTestComponent,
    HashDemoComponent,
  ],
  imports: [
    CommonModule,
    BlockchainRoutingModule,
    TranslateModule
  ]
})
export class BlockchainModule { }
