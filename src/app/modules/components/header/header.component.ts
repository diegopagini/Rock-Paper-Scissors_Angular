import {
  AfterViewChecked,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { Observable } from 'rxjs';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, AfterViewChecked {
  score$: Observable<number>;

  constructor(
    private gameService: GameService,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.score$ = this.gameService.getWins();
  }

  ngAfterViewChecked(): void {
    this.cdRef.detectChanges();
  }
}
