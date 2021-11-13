import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CartProduct } from '../interfaces/cart-product.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: CartProduct[] = [];
  total: number = 0;

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

  getTotal() {
    return this.total;
  }
}
