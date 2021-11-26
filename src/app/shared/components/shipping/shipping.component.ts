import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { ShippingService } from '../../services/shipping.service';


@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent {

  items = this.shippingService.getJSON();

  constructor(private shippingService: ShippingService) { 
    console.log(this.items)
  }

}


