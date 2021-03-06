import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { providers } from './providers.config';
import {  HttpClientModule } from '@angular/common/http';
import { SwitchComponent } from './design/components/atomic/switch/switch.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [...providers],
  bootstrap: [AppComponent]
})
export class AppModule { }
