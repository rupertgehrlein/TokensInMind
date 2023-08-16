import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'blockchain',
    loadChildren: () => import('./blockchain/blockchain.module').then(m => m.BlockchainModule),
  },
  {
    path: 'downloads',
    loadChildren: () => import('./downloads/downloads.module').then(m => m.DownloadsModule),
  },
  {
    path: 'cryptography',
    loadChildren: () => import('./cryptography/cryptography.module').then(m => m.CryptographyModule),
  },
  {
    path: 'cryptocurrency',
    loadChildren: () => import('./cryptocurrency/cryptocurrency.module').then(m => m.CryptocurrencyModule),
  },
  {
    path: 'nft',
    loadChildren: () => import('./nft/nft.module').then(m => m.NftModule),
  },
  {
    path: 'impressum',
    loadChildren: () => import('./impressum/impressum.module').then(m => m.ImpressumModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
