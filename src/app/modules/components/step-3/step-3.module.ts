import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Step3Component } from './step3.component';
import { MaterialModule } from 'src/app/shared/material/material.module';

@NgModule({
  declarations: [Step3Component],
  imports: [CommonModule, MaterialModule],
  exports: [Step3Component],
})
export class Step3Module {}
