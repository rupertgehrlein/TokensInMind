import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BlockDemoRoutingModule } from './block-demo-routing.module';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BlockDemoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule
  ]
})
export class BlockDemoModule { }
