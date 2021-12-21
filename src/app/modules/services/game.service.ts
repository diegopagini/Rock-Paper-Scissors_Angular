import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, map, Observable, of } from 'rxjs';
import { Option } from '../models/option.interface';

@Injectable({
  providedIn: 'root',
})
export class GameService {
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
  private subject = new BehaviorSubject<Option>({});
  private playerOption = this.subject.asObservable();

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
        return 'winner';
      })
    );
  }
}
