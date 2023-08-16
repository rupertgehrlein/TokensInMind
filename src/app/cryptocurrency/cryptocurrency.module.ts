import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CryptocurrencyRoutingModule } from './cryptocurrency-routing.module';
import { CryptocurrencyHomeComponent } from './cryptocurrency-home/cryptocurrency-home.component';


@NgModule({
  declarations: [
    CryptocurrencyHomeComponent
  ],
  imports: [
    CommonModule,
    CryptocurrencyRoutingModule
  ]
})
export class CryptocurrencyModule { }
