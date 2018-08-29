import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ListMarketsRoutingModule} from './list-markets-routing.module';
import {ListOfMarketsComponent} from './list-of-markets/list-of-markets.component';

import {MatButtonModule, MatInputModule, MatPaginatorModule, MatTableModule} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    ListMarketsRoutingModule,

    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatButtonModule
  ],
  declarations: [ListOfMarketsComponent]
})
export class ListMarketsModule {
}
