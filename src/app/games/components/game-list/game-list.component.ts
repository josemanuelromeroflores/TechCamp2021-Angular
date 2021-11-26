import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { Game } from '../../interfaces/game.interface';
import { GameService } from '../../services/game.service';

import { CartProduct } from 'src/app/shared/interfaces/cart-product.interface';
import { CartService } from 'src/app/shared/services/cart.service';
@Component({
  selector: 'game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit{
  
  games: Game[] = [];
  titleSearch: string = '';
  constructor(private route: ActivatedRoute,
    private gameService: GameService,
    private cartService: CartService,   
    private formBuilder: FormBuilder) { }
  
  checkoutForm = this.formBuilder.group({
    title: ''
  });

  ngOnInit(): void {
    this.checkoutForm.value.title = '';

    if(this.checkoutForm.value.title !== '')
    {
      this.searchGames();
    }
  }

  searchGames() {
    this.titleSearch = this.checkoutForm.value.title;
    this.gameService.getGames(this.titleSearch).subscribe((data: Game[]) => {
      console.log(data);
      this.games = data;
    });
  }

  onNotify() {
    
    window.alert('Serás notificado cuando el juego se encuentre disponible');
  }

  addToCart(game: Game) {
    
  var cartProduct:CartProduct={title:game.external, price:game.cheapest};
    this.cartService.addToCart(cartProduct);
    window.alert(`El producto ${game.external} ha sido añadido a la cesta!`);
  }
}