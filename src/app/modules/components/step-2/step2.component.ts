import {
  AfterViewChecked,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import { delay, Observable, tap } from 'rxjs';
import { Option } from '../../models/option.interface';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.scss'],
})
export class Step2Component implements OnInit, AfterViewChecked {
  playerSelection$: Observable<Option>;
  machineSelection$: Observable<Option>;
  result$: Observable<string>;

  constructor(
    private gameService: GameService,
    private stepper: MatStepper,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.playerSelection$ = this.gameService.getPlayerSelection();

    this.machineSelection$ = this.gameService.getMachineSelection().pipe(
      delay(5000),
      tap(() => {
        setTimeout(() => {
          this.stepper.next();
        }, 2500);
      })
    );

    this.result$ = this.gameService.getWinner(
      this.playerSelection$,
      this.machineSelection$
    );
  }

  ngAfterViewChecked(): void {
    this.cdRef.detectChanges();
  }
}
