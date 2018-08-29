import {Component} from '@angular/core';
import {StockService} from "../../services/stock.service";

export interface PeriodicElement {
  title: string;
  price: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {price: 1, title: 'Hydrogen'},
  {price: 2, title: 'Helium'},
  {price: 3, title: 'Lithium'},
  {price: 4, title: 'Beryllium'},
  {price: 5, title: 'Boron'},
];

@Component({
  selector: 'app-user-portfolio',
  templateUrl: './user-portfolio.component.html',
  styleUrls: ['./user-portfolio.component.css']
})
export class UserPortfolioComponent {
  displayedColumns: string[] = ['title', 'price', 'quantity', 'sell'];
  dataSource = ELEMENT_DATA;

  constructor(private stockService: StockService){

  }
}

