import { SharedModule } from './../../shared/modules/shared.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { GameListComponent } from '../components/game-list/game-list.component';
import { GameAlertsComponent } from '../components/game-alerts/game-alerts.component';
import { GameDetailsComponent } from '../components/game-details/game-details.component';

@NgModule({
  declarations: [
    GameListComponent,
    GameAlertsComponent,
    GameDetailsComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: '', component: GameListComponent },
      { path: ':gameId', component: GameDetailsComponent },
    ])
  ]
})
export class GameModule {
}
