import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../../components/home/home.component';
import { MainComponent } from '../../components/home/main/main.component';

const appRouts: Routes = [
  { path: '', component: MainComponent },

];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class RoutingModule { }
