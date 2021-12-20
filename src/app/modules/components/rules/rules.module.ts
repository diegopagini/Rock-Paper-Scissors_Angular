import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RulesComponent } from './rules.component';
import { MaterialModule } from 'src/app/shared/material/material.module';

@NgModule({
  declarations: [RulesComponent],
  imports: [CommonModule, MaterialModule],
  exports: [RulesComponent],
})
export class RulesModule {}
