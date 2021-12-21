import { Injectable } from '@angular/core';
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

  get options(): Option[] {
    return this.gameOptions;
  }
}
