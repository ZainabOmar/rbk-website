import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatStepperModule } from '@angular/material/stepper';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    MatTabsModule,
    MatIconModule,
    MatStepperModule,
    MatCardModule,
    MatButtonModule
  ],
  exports: [
    MatTabsModule,
    MatIconModule,
    MatStepperModule,
    MatCardModule,
    MatButtonModule
  ],
  declarations: []
})
export class HelpersModule { }
