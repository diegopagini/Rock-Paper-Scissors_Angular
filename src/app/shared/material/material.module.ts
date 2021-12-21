import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatStepperModule } from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [MatButtonModule, MatDialogModule, MatStepperModule, MatIconModule],
  exports: [MatButtonModule, MatDialogModule, MatStepperModule, MatIconModule],
})
export class MaterialModule {}
