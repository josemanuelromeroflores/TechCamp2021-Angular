import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CartProduct } from '../interfaces/cart-product.interface';

import * as data from "../../../assets/shipping.json";
import { from, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  items: CartProduct[] = [];
  total: number = 0;
  muestraError :boolean=false;

  constructor(private http: HttpClient) { }

  addToCart(cartProduct: CartProduct) {
    this.total = Number(this.total) + Number(cartProduct.price);
    this.items.push(cartProduct);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.total = 0;
    this.items = [];
    return this.items;
  }

  changeShowError(){
    this.muestraError = !this.muestraError;
  }
  showErrorFalse(){
    this.muestraError = false;
  }
  getTotal() {
    return this.total;
  }

  getGastosEnvio(){
    return from(data);
  }
}
