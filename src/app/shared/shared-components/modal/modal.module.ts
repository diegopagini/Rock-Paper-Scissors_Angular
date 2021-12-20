import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import { MaterialModule } from '../../material/material.module';

@NgModule({
  declarations: [ModalComponent],
  imports: [CommonModule, MaterialModule],
  exports: [ModalComponent],
})
export class ModalModule {}
