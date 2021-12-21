import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Step4Component } from './step4.component';
import { MaterialModule } from 'src/app/shared/material/material.module';

@NgModule({
  declarations: [Step4Component],
  imports: [CommonModule, MaterialModule],
  exports: [Step4Component],
})
export class Step4Module {}
