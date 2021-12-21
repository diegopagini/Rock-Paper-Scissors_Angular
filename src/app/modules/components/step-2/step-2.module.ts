import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Step2Component } from './step2.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { SharedComponentsModule } from 'src/app/shared/shared-components/shared-components.module';

@NgModule({
  declarations: [Step2Component],
  imports: [CommonModule, MaterialModule, SharedComponentsModule],
  exports: [Step2Component],
})
export class Step2Module {}
