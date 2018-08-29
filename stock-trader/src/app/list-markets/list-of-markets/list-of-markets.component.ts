import {Component, OnInit, ViewChild} from '@angular/core';
import {StockService} from "../../services/stock.service";
import {MatSort, MatTableDataSource} from "@angular/material";

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
export class ListOfMarketsComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: string[] = ['name', 'price', 'quantity', 'buy'];
  dataSource = new MatTableDataSource([]);

  constructor(private stockService: StockService) {

  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.stockService.arrayStock);
    this.dataSource.sort = this.sort;
  }

  buyMarket(_market) {
    this.stockService.buyMarket(_market, _market['quantityToBS']);
  }
}

