import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule } from './modal/modal.module';
import { OptionModule } from './option/option.module';
import { WaitingModule } from './waiting/waiting.module';

@NgModule({
  imports: [CommonModule, ModalModule, OptionModule, WaitingModule],
  exports: [ModalModule, OptionModule, WaitingModule],
})
export class SharedComponentsModule {}
