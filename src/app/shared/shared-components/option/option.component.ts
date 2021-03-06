import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Option } from 'src/app/modules/models/option.interface';

@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OptionComponent {
  @Input() option: Option;
  @Input() player: string;
  @Output() optionEmitter = new EventEmitter<Option>();

  selectOption(): void {
    this.optionEmitter.emit(this.option);
  }
}
