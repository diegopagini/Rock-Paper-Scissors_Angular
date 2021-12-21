import { Component, OnInit } from '@angular/core';
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

  constructor(private gameService: GameService, private router: Router) {}

  ngOnInit(): void {
    this.score$ = this.gameService.getWins();
  }

  handleYes(): void {
    this.router
      .navigate(['/welcome'])
      .then(() => this.router.navigate(['/game']));
  }

  handleNo(): void {
    this.router.navigate(['/welcome']);
  }
}
