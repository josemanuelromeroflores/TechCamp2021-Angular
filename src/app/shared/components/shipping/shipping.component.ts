import { ShippingService } from './../../services/shipping.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent{

  shippingCosts = this.shippingService.getShippingCosts();

  constructor(private shippingService: ShippingService) { }
  
  
  

 
}
