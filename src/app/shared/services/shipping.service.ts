import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { shipping } from '../interfaces/shipping.interface';
import jsonFile from "../../../assets/shipping.json";
@Injectable({
  providedIn: 'root'
})
export class ShippingService {
  shippingCosts :shipping[]=jsonFile;
  
  constructor( ) { }

  getShippingCosts(){
    return this.shippingCosts;
  }
}
