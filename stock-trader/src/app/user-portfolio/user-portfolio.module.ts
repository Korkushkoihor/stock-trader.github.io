import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UserPortfolioRoutingModule} from './user-portfolio-routing.module';
import {UserPortfolioComponent} from './user-portfolio/user-portfolio.component';
import {MatButtonModule, MatCardModule, MatInputModule, MatPaginatorModule, MatTableModule} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    UserPortfolioRoutingModule,

    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule
  ],
  declarations: [UserPortfolioComponent]
})
export class UserPortfolioModule {
}
