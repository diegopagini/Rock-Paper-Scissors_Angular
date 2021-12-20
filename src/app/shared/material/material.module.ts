import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatStepperModule } from '@angular/material/stepper';

@NgModule({
  imports: [MatButtonModule, MatDialogModule, MatStepperModule],
  exports: [MatButtonModule, MatDialogModule, MatStepperModule],
})
export class MaterialModule {}
