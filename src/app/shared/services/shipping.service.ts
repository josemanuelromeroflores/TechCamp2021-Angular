import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ShippingPrices } from '../interfaces/shipping-prices-interface';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
  export class ShippingService {
  
    items: ShippingPrices[] = [];

    constructor(private http: HttpClient) {
        this.getJSON().subscribe(data => {
          console.log(data);
      });
    
       }

       public getJSON(): Observable<any> {
        return this.http.get("../../../assets/shipping.json");}

}
