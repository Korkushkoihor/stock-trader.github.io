import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';

import {MatTabsModule, MatToolbarModule} from "@angular/material";

import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {StockService} from "./services/stock.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    MatToolbarModule,
    MatTabsModule,
  ],
  providers: [
    StockService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
