import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  items = this.cartService.getItems();
  total = this.cartService.getTotal();

  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });

  constructor(private cartService: CartService,
    private formBuilder: FormBuilder) { }

  onSubmit(): void {
    this.items = this.cartService.clearCart();
    console.warn('Tu compra ha sido realizada', this.checkoutForm.value);
    this.checkoutForm.reset();
  }
}
