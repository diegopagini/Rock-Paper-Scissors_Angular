import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule } from './modal/modal.module';
import { OptionModule } from './option/option.module';

@NgModule({
  imports: [CommonModule, ModalModule, OptionModule],
  exports: [ModalModule, OptionModule],
})
export class SharedComponentsModule {}
