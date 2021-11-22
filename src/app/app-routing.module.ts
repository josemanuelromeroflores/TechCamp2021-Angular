import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { CartComponent } from './shared/components/cart/cart.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShippingComponent } from './shared/components/shipping/shipping.component';

const routes: Routes = [ // El orden importa!!!
    { path: 'games', loadChildren: () => import('./games/modules/game.module').then(m => m.GameModule) },
    { path: 'anime', loadChildren: () => import('./anime/modules/anime.module').then(m => m.AnimeModule) },
    { path: 'cart',  component: CartComponent },
    { path: 'shipping', component: ShippingComponent },
    { path: '', redirectTo: '/games', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
