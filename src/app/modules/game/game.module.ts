import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game.component';
import { GameRoutingModule } from './game-routing.module';
import { GameComponentsModule } from '../components/game.components.module';

@NgModule({
  declarations: [GameComponent],
  imports: [CommonModule, GameRoutingModule, GameComponentsModule],
})
export class GameModule {}
