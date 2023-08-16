import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CryptographyRoutingModule } from './cryptography-routing.module';
import { CryptographyHomeComponent } from './cryptography-home/cryptography-home.component';
import { Sha256Component } from './sha256/sha256.component';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    CryptographyHomeComponent,
    Sha256Component
  ],
  imports: [
    CommonModule,
    CryptographyRoutingModule,
    TranslateModule
  ]
})
export class CryptographyModule { }
