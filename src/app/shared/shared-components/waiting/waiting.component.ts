import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-waiting',
  templateUrl: './waiting.component.html',
  styleUrls: ['./waiting.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WaitingComponent {
  @Input() player: string;
}
