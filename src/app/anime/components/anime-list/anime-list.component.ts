import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/shared/services/cart.service';
import { Anime } from '../../interfaces/anime.interface';
import { AnimeService } from '../../services/anime.service';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.css']
})
export class AnimeListComponent implements OnInit {

  animeList: Anime[] = [];
  titleSearch: string = '';

  constructor(private route: ActivatedRoute,
    private animeService: AnimeService,
    private cartService: CartService,
    private formBuilder: FormBuilder) { }

  checkoutForm = this.formBuilder.group({
    title: ''
  });

  ngOnInit(): void {
    this.checkoutForm.value.title = this.route.snapshot.queryParamMap.get('text') || '';

    if(this.checkoutForm.value.title !== '')
    {
      this.searchAnimeList();
    }
  }

  searchAnimeList() {
    
  }

  addToCart(anime: Anime) {
    this.cartService.addToCart({ title: anime.title, price: anime.episodes * 1.5 });
    window.alert(`El producto ${anime.title} ha sido añadido a la cesta!`);
  }
}
