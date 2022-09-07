import { ServerComponent } from './server/server.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServersComponent } from './servers/servers.component';
import { FormsModule } from '@angular/forms';
import { Exercise3Component } from './exercise3/exercise3.component';
import { GameControlComponent } from './exercise4/game-control/game-control.component';
import { OddComponent } from './exercise4/odd/odd.component';
import { EvenComponent } from './exercise4/even/even.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    Exercise3Component,
    GameControlComponent,
    OddComponent,
    EvenComponent
  ], 
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
