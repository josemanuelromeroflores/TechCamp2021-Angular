import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/shared/services/cart.service';

import { Game } from '../../interfaces/game.interface';
import { GameService } from '../../services/game.service';

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
    private formBuilder: FormBuilder,
    private cartService: CartService) { }
  
  checkoutForm = new FormGroup({});
  inicializarForm(){
    this.checkoutForm = this.formBuilder.group({
      title: new FormControl(this.titleSearch, Validators.minLength(3))
    });
  }

  ngOnInit(): void {
    this.checkoutForm.value.title = this.route.snapshot.queryParamMap.get('text') || '';
    this.titleSearch =  this.checkoutForm.value.title;
    this.inicializarForm();
    if(this.checkoutForm.value.title !== '')
    {
      this.searchGames();
    }
  }

  getElemento(nombreElemento:string):boolean{
    var invalido =  this.checkoutForm.get(nombreElemento)?.invalid;
    var tocado   = this.checkoutForm.get(nombreElemento)?.touched;
    if(invalido == undefined) invalido = true;
    if(tocado == undefined) tocado = false;
    return tocado && invalido;
  }

  searchGames() {
    try {
      this.titleSearch = this.checkoutForm.value.title;
      this.gameService.getGames(this.titleSearch).subscribe((data: Game[]) => {
        console.log(data);
        this.games = data;
      });
    } catch (error) {
      console.warn("ha ocurrido un error",error);
    }
  }

  onNotify() {
    window.alert('Serás notificado cuando el juego se encuentre disponible');
  }

  addToCart(game: Game) {
    this.cartService.addToCart({title:game.external, price:game.cheapest});
    window.alert(`El producto ${game.external} ha sido añadido a la cesta!`);
  }
}