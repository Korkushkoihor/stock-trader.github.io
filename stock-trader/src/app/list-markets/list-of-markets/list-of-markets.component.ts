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
  selector: 'app-list-of-markets',
  templateUrl: './list-of-markets.component.html',
  styleUrls: ['./list-of-markets.component.css']
})
export class ListOfMarketsComponent {
  displayedColumns: string[] = ['title', 'price', 'quantity', 'buy'];
  dataSource = ELEMENT_DATA;

  constructor(private stockService: StockService){

  }
}

