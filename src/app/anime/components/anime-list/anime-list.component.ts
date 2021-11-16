import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
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
  @Output("envioError") envioError = new EventEmitter();

  constructor(private route: ActivatedRoute,
    private animeService: AnimeService,
    private cartService: CartService,
    private formBuilder: FormBuilder) { }

  checkoutForm = this.formBuilder.group({
    title: new FormControl("", Validators.minLength(3))
  });

  inicializarForm(){
    this.checkoutForm = this.formBuilder.group({
      title: new FormControl(this.titleSearch)
    });
  }

  ngOnInit(): void {
    this.checkoutForm.value.title = this.route.snapshot.queryParamMap.get('text') || '';
    this.titleSearch = this.checkoutForm.value.title;
    this.inicializarForm();
    if(this.checkoutForm.value.title !== '')
    {
      this.searchAnimeList();
    }
  }

  getElemento(nombreElemento:string):boolean{
    var invalido =  this.checkoutForm.get(nombreElemento)?.invalid;
    var tocado   = this.checkoutForm.get(nombreElemento)?.touched;
    if(invalido == undefined) invalido = true;
    if(tocado   == undefined) tocado   = false;
    return tocado && invalido;
  }

  searchAnimeList() {
    try {
      if(!this.checkoutForm.valid){
        
        return;
      }
      this.titleSearch = this.checkoutForm.value.title;
      this.animeService.getAnimeList(this.titleSearch)
      .subscribe((datosAnime:Anime[])=> this.animeList = datosAnime)
      
    } catch (error) {
        this.animeList= [];
        this.envioError.emit("Son necesarios más caracteres")

    }
  }

  addToCart(anime: Anime) {
    this.cartService.addToCart({ title: anime.title, price: anime.episodes * 1.5 });
    window.alert(`El producto ${anime.title} ha sido añadido a la cesta!`);
  }
}
