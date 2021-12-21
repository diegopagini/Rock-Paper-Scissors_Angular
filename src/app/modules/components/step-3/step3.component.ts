import { Component, OnInit } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.scss'],
})
export class Step3Component implements OnInit {
  score$: Observable<number>;

  constructor(
    private gameService: GameService,
    private stepper: MatStepper,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.score$ = this.gameService.getWins();
  }

  handleYes(): void {
    this.stepper.reset();
  }

  handleNo(): void {
    this.router.navigate(['/welcome']);
  }
}
