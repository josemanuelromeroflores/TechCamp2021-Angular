import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from '../components/cart/cart.component';
import { ShippingComponent } from '../components/shipping/shipping.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CartComponent,
    ShippingComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
