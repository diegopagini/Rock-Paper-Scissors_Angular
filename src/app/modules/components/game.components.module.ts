import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from './header/header.module';
import { RulesModule } from './rules/rules.module';
import { GameStepsModule } from './game-steps/game-steps.module';

@NgModule({
  imports: [CommonModule, HeaderModule, RulesModule, GameStepsModule],
  exports: [HeaderModule, RulesModule, GameStepsModule],
})
export class GameComponentsModule {}
