import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, map, Observable, of } from 'rxjs';
import { Option } from '../models/option.interface';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  // selection options
  private gameOptions: Option[] = [
    {
      img: 'assets/images/icon-paper.svg',
      name: 'paper',
      gradient: 'hsl(230, 89%, 62%)',
    },
    {
      img: 'assets/images/icon-scissors.svg',
      name: 'scissors',
      gradient: 'hsl(39, 89%, 49%)',
    },
    {
      img: 'assets/images/icon-rock.svg',
      name: 'rock',
      gradient: 'hsl(349, 71%, 52%)',
    },
  ];
  // player option selected
  private subject = new BehaviorSubject<Option>({});
  private playerOption = this.subject.asObservable();
  // possible game outcomes
  private results: { tie: string; win: string; lost: string } = {
    tie: 'tie!',
    win: 'You Win!',
    lost: 'You lost!',
  };
  // win counter
  private counter = 0;
  private counter$ = new BehaviorSubject(this.counter);
  private wins$ = this.counter$.asObservable();

  getOptions(): Option[] {
    return this.gameOptions;
  }

  selectPlayerOption(option: Option): void {
    this.subject.next(option);
  }

  getPlayerSelection(): Observable<Option> {
    return this.playerOption;
  }

  getMachineSelection(): Observable<Option> {
    const random = Math.floor(Math.random() * 3);
    return of(this.gameOptions[random]);
  }

  getWinner(
    playerSelection: Observable<Option>,
    machineSelection: Observable<Option>
  ): Observable<string> {
    return combineLatest([playerSelection, machineSelection]).pipe(
      map(([obs1, obs2]) => {
        const playerOption = obs1.name;
        const machineOption = obs2.name;

        return this.calculateResult(playerOption, machineOption);
      })
    );
  }

  getWins(): Observable<number> {
    return this.wins$;
  }

  private addWin(): void {
    this.counter++;
    this.counter$.next(this.counter);
  }

  private calculateResult(playerOption: any, machineOption: any): any {
    switch (true) {
      case playerOption === 'rock' && machineOption === 'rock':
        return this.results.tie;

      case playerOption === 'rock' && machineOption === 'paper':
        return this.results.lost;

      case playerOption === 'rock' && machineOption === 'scissors':
        this.addWin();
        return this.results.win;

      case playerOption === 'paper' && machineOption === 'paper':
        return this.results.tie;

      case playerOption === 'paper' && machineOption === 'scissors':
        return this.results.lost;

      case playerOption === 'paper' && machineOption === 'rock':
        this.addWin();
        return this.results.win;

      case playerOption === 'scissors' && machineOption === 'scissors':
        return this.results.tie;

      case playerOption === 'scissors' && machineOption === 'rock':
        return this.results.lost;

      case playerOption === 'scissors' && machineOption === 'paper':
        this.addWin();
        return this.results.win;
    }
  }
}
