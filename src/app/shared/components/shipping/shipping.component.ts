import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import * as shipping from '../../../../assets/shipping.json';
import { from, Observable } from 'rxjs';


@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent {
  shippingCosts: Observable<any>;
  observer= {error: (err: Error) => console.error('Observer got an error: ' + err)};
  //shippingCosts: [string , number] = shipping;

  constructor(private cartService: CartService) {
    this.shippingCosts = from(shipping);
    this.shippingCosts.subscribe(subscriber => {console.log('Hello', subscriber);});
   }

}
