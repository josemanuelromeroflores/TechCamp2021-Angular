import { GameService } from './../../services/game.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Game } from '../../interfaces/game.interface';

@Component({
  selector: 'game-alerts',
  templateUrl: './game-alerts.component.html',
  styleUrls: ['./game-alerts.component.css']
})
export class GameAlertsComponent{

  @Input() game!: Game;
  @Output() notify = new EventEmitter();
  constructor() {
  }
}
