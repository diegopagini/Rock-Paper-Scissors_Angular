import { Component, OnInit } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import { Option } from '../../models/option.interface';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.scss'],
})
export class Step1Component implements OnInit {
  options: Option[];

  constructor(private gameService: GameService, private stepper: MatStepper) {}

  ngOnInit(): void {
    this.options = this.gameService.getOptions();
  }

  selectPlayerOption(option: Option): void {
    this.gameService.selectPlayerOption(option);
    this.stepper.next();
  }
}
