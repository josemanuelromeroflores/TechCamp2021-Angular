import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent {

  constructor(private cartService: CartService) { 
   this.shippingCosts = this.cartService.getGastosEnvio();
  
   this.cartService.getGastosEnvio().subscribe(resultado => {
     console.log("que devuelvo", resultado)
   })
  }

  shippingCosts:Observable<any>;
}
