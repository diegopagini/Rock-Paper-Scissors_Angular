import { Component, OnInit } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import { Observable } from 'rxjs';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.scss'],
})
export class Step3Component implements OnInit {
  score$: Observable<number>;

  constructor(private gameService: GameService, private stepper: MatStepper) {}

  ngOnInit(): void {
    this.score$ = this.gameService.getWins();
  }

  handleYes(): void {
    this.stepper.reset();
  }

  handleNo(): void {}
}
