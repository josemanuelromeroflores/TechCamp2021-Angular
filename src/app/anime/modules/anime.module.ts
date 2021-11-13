import { SharedModule } from '../../shared/modules/shared.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AnimeListComponent } from '../components/anime-list/anime-list.component';
import { AnimeDetailsComponent } from '../components/anime-details/anime-details.component';

@NgModule({
  declarations: [
    AnimeListComponent,
    AnimeDetailsComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: '', component: AnimeListComponent },
      { path: ':animeId', component: AnimeDetailsComponent },
    ])
  ]
})
export class AnimeModule { }
