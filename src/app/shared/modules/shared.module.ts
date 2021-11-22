import { PageNotFoundComponent } from './../components/page-not-found/page-not-found.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from '../components/cart/cart.component';
import { ShippingComponent } from '../components/shipping/shipping.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CartComponent,
    ShippingComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    
  
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PageNotFoundComponent
  ]
})
export class SharedModule { }
