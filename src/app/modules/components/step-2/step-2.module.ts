import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Step2Component } from './step2.component';
import { MaterialModule } from 'src/app/shared/material/material.module';

@NgModule({
  declarations: [Step2Component],
  imports: [CommonModule, MaterialModule],
  exports: [Step2Component],
})
export class Step2Module {}
