import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Deal } from '../interfaces/deal.interface';
import { Game } from '../interfaces/game.interface';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  
  private REST_API_SERVER = environment.apiGames + '/games';
  deals: Deal[] | undefined;
  //items: Game[] = [];

  constructor(private http: HttpClient) { }

  getGames(title: string): Observable<Game[]> {
    return this.http.get<Game[]>(`${this.REST_API_SERVER}?title=${title}`);
    
    // result.subscribe((data: Game[]) => {
    //   console.log(data);
    //   this.items = data;
    // });

    // return result;
  }

  getGameById(id: number): Observable<any> {
    return this.http.get(`${this.REST_API_SERVER}?id=${id}`).pipe(map((data: any) => {
      console.log(data);
      return {
        game: {
          gameID: id,
          cheapest: data.cheapestPriceEver.price,
          external: data.info.title,
          thumb: data.info.thumb
        },
        deals: data.deals
      }
    }));
  }
}
