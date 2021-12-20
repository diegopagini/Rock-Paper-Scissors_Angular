import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from 'src/app/shared/shared-components/modal/modal.component';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.scss'],
})
export class RulesComponent {
  constructor(private dialog: MatDialog) {}

  openRules(): void {
    this.dialog.open(ModalComponent, {});
  }
}
