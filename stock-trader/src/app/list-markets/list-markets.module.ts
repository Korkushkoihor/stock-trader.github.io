import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";

import {ListMarketsRoutingModule} from './list-markets-routing.module';
import {ListOfMarketsComponent} from './list-of-markets/list-of-markets.component';

import {MatButtonModule, MatInputModule, MatPaginatorModule, MatSortModule, MatTableModule} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    ListMarketsRoutingModule,
    FormsModule,

    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatButtonModule,
    MatSortModule
  ],
  declarations: [ListOfMarketsComponent]
})
export class ListMarketsModule {
}
