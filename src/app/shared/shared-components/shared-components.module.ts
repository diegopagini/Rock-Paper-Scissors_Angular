import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule } from './modal/modal.module';

@NgModule({
  imports: [CommonModule, ModalModule],
  exports: [ModalModule],
})
export class SharedComponentsModule {}
