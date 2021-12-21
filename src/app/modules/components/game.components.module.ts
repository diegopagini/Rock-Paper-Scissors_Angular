import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from './header/header.module';
import { RulesModule } from './rules/rules.module';
import { GameStepsModule } from './game-steps/game-steps.module';
import { Step1Module } from './step-1/step-1.module';
import { Step2Module } from './step-2/step-2.module';
import { Step3Module } from './step-3/step-3.module';

@NgModule({
  imports: [
    CommonModule,
    HeaderModule,
    RulesModule,
    GameStepsModule,
    Step1Module,
    Step2Module,
    Step3Module,
  ],
  exports: [
    HeaderModule,
    RulesModule,
    GameStepsModule,
    Step1Module,
    Step2Module,
    Step3Module,
  ],
})
export class GameComponentsModule {}
