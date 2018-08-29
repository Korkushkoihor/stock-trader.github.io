import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UserPortfolioComponent} from "./user-portfolio/user-portfolio.component";

const routes: Routes = [
  {
    path: '',
    component: UserPortfolioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserPortfolioRoutingModule {
}
