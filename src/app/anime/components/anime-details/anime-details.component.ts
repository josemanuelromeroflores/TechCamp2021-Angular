import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/shared/services/cart.service';
import { Anime } from '../../interfaces/anime.interface';
import { AnimeService } from '../../services/anime.service';

@Component({
  selector: 'anime-details',
  templateUrl: './anime-details.component.html',
  styleUrls: ['./anime-details.component.css']
})
export class AnimeDetailsComponent implements OnInit {

  anime: Anime | undefined;
  textSearch: string = '';

  constructor(private route: ActivatedRoute,
    private animeService: AnimeService,
    private cartService: CartService) { }

  ngOnInit() {
    const animeIdFromRoute = Number(this.route.snapshot.paramMap.get('animeId'));
    this.animeService.getAnimeById(animeIdFromRoute).subscribe((data: any) => {
      console.log(data);
      this.anime = data;
    });
    this.textSearch = this.route.snapshot.queryParamMap.get('text') || '';
  }

  addToCart(anime: Anime) {
    this.cartService.addToCart({ title: anime.title, price: anime.episodes * 1.5 });
    window.alert(`El producto ${anime.title} ha sido añadido a la cesta!`);
  }
}
