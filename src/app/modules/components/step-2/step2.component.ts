import { Component, OnInit } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import { Observable } from 'rxjs';
import { Option } from '../../models/option.interface';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.scss'],
})
export class Step2Component implements OnInit {
  playerSelection$: Observable<Option>;
  machineSelection$: Observable<Option>;
  result$: Observable<string>;

  constructor(private gameService: GameService, private stepper: MatStepper) {}

  ngOnInit(): void {
    this.playerSelection$ = this.gameService.getPlayerSelection();
    setTimeout(() => {
      this.machineSelection$ = this.gameService.getMachineSelection();

      this.result$ = this.gameService.getWinner(
        this.playerSelection$,
        this.machineSelection$
      );
    }, 5000);

    setTimeout(() => {
      this.stepper.next();
    }, 7500);
  }
}
