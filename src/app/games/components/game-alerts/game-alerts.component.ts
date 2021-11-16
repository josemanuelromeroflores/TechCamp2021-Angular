import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Game } from '../../interfaces/game.interface';

@Component({
  selector: 'game-alerts',
  templateUrl: './game-alerts.component.html',
  styleUrls: ['./game-alerts.component.css']
})
export class GameAlertsComponent {

  @Input("game") game: Game ={
    cheapest:0,
    external:"",
    gameID:0,
    thumb:""
  };

  alertaGame(game:Game){
    
    alert(JSON.stringify(game));
  }

  constructor() {
    console.log("el game del constructor, vacío",this.game)
   }
}
