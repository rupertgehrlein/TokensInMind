import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';

import { Sha256RoutingModule } from './sha256-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Sha256RoutingModule,
    MatIconModule,
    TranslateModule
  ]
})
export class Sha256Module { }
