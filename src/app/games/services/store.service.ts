import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  
  private REST_API_SERVER = environment.apiGames + '/stores';

  constructor(private http: HttpClient) { }

  getStores(): Observable<any[]> {
    return this.http.get(`${this.REST_API_SERVER}`).pipe(map((data: any) => {
      console.log(data);

      let stores: any[] = [];

      data.forEach((element: { storeID: any; storeName: any; isActive: number; images: any; }) => {
        stores.push({
          storeID: element.storeID,
          storeName: element.storeName,
          isActive: element.isActive === 1 ? true : false,
          images: element.images,
        })
      });

      return stores;
    }));
  }
}
