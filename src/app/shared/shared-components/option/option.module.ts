import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OptionComponent } from './option.component';
import { MaterialModule } from '../../material/material.module';

@NgModule({
  declarations: [OptionComponent],
  imports: [CommonModule, MaterialModule],
  exports: [OptionComponent],
})
export class OptionModule {}
