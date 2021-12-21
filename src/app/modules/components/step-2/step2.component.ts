import { Component, OnInit } from '@angular/core';
import { delay, Observable } from 'rxjs';
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

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.playerSelection$ = this.gameService.getPlayerSelection();
    this.machineSelection$ = this.gameService
      .getMachineSelection()
      .pipe(delay(5000));
  }
}
