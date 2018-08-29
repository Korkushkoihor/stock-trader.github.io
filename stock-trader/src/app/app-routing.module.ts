import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListOfMarketsComponent} from "./list-markets/list-of-markets/list-of-markets.component";

const routes: Routes = [
  {
    path: 'markets',
    loadChildren: './list-markets/list-markets.module#ListMarketsModule'
  },
  {
    path: 'portfolio',
    loadChildren: './user-portfolio/user-portfolio.module#UserPortfolioModule'
  }
  ,
  {
    path: '',
    loadChildren: './list-markets/list-markets.module#ListMarketsModule'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
