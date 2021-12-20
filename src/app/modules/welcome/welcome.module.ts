import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome.component';
import { WelcomeRoutingModule } from './welcome-routing.module';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/shared/material/material.module';

@NgModule({
  declarations: [WelcomeComponent],
  imports: [CommonModule, WelcomeRoutingModule, RouterModule, MaterialModule],
})
export class WelcomeModule {}
