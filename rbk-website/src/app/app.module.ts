import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { DataService } from './data.service';
import { RoutingModule } from './modules/routing/routing.module';
import { HelpersModule } from './modules/helpers/helpers.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MainComponent } from './components/home/main/main.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RoutingModule,
    HelpersModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
