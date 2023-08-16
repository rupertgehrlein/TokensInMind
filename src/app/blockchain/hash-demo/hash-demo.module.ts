import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HashDemoRoutingModule } from './hash-demo-routing.module';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HashDemoRoutingModule,
    TranslateModule
  ]
})
export class HashDemoModule { }
