import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CryptocurrencyHomeComponent } from './cryptocurrency-home/cryptocurrency-home.component';

const routes: Routes = [
  {
    path: '',
    component: CryptocurrencyHomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CryptocurrencyRoutingModule { }
