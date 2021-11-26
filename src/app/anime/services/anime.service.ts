import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Anime } from '../interfaces/anime.interface';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {
  
  private REST_API_SERVER = environment.apiAnime;
  //items: Game[] = [];

  constructor(private http: HttpClient) { }

  getAnimeList(title: string): Observable<Anime[]> {
    return this.http.get<Anime[]>(`${this.REST_API_SERVER}/search/anime?q=${title}`).pipe(
      map((data: any) => {
        console.log(data.results);
        return data.results.filter((filter: { rated: string; }) => filter.rated !== 'Rx');
      })
    );
    
    // result.subscribe((data: Game[]) => {
    //   console.log(data);
    //   this.items = data;
    // });

    // return result;
  }

  getAnimeById(id: number): Observable<any> {
    return this.http.get(`${this.REST_API_SERVER}?id=${id}`).pipe(map((data: any) => {
      console.log(data);
      return {
        anime:{
          mal_id: id,
        url: data.url,
        image_url: data.image_url,
        title: data.title,
        synopsis: data.synopsis,
        episodes: data.episodes,
        score: data.score,
        rated: data.rating
        }
      }
    }));
  }
}
