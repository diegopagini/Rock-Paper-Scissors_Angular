import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Step1Component } from './step1.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { SharedComponentsModule } from 'src/app/shared/shared-components/shared-components.module';

@NgModule({
  declarations: [Step1Component],
  imports: [CommonModule, MaterialModule, SharedComponentsModule],
  exports: [Step1Component],
})
export class Step1Module {}
