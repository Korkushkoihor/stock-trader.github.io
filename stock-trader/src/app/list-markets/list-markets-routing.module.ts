import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListOfMarketsComponent} from "./list-of-markets/list-of-markets.component";

const routes: Routes = [
  {
    path: '',
    component: ListOfMarketsComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListMarketsRoutingModule { }
