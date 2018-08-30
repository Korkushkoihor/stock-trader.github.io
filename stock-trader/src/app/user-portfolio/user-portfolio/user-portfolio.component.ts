import {Component, OnChanges, OnInit, ViewChild} from '@angular/core';
import {StockService} from "../../services/stock.service";

import {MarketBoughtModel} from "../../model/MarketBoughtModel";
import {Subscription} from "rxjs";

export interface PeriodicElement {
  title: string;
  price: number;
}

@Component({
  selector: 'app-user-portfolio',
  templateUrl: './user-portfolio.component.html',
  styleUrls: ['./user-portfolio.component.css']
})
export class UserPortfolioComponent implements OnInit, OnChanges {
  displayedColumns: string[] = ['name', 'price', 'quantity', 'quantityToSell', 'sell'];
  dataSource = [];
  public activeSumMarkets: number = 0;

  public changedBoughtArraySubject: Subscription;

  constructor(private stockService: StockService) {

  }

  ngOnInit() {
    this.dataSource = this.stockService.arrayBoughtStocks;
    this.updateActiveSumMarkets();

    this.changedBoughtArraySubject = this.stockService.changedBoughtArraySubject
      .subscribe((boughtMarkets: MarketBoughtModel[]) => {
        this.dataSource = [];
        setTimeout(() => {
          this.dataSource = boughtMarkets;
          this.updateActiveSumMarkets();
        });
      })
  }

  public updateActiveSumMarkets() {
    let sum = 0;
    for (let i = 0; i < this.dataSource.length; i++) {
      sum += +this.dataSource[i].price * this.dataSource[i].quantity;
    }
    this.activeSumMarkets = sum;
  }

  public sellMarket(_market: MarketBoughtModel) {
    if (_market.quantityToBS){
      this.stockService.sellMarket(_market, +_market.quantityToBS.toFixed());
    }
  }

  ngOnChanges() {
    if (this.changedBoughtArraySubject) {
      this.changedBoughtArraySubject.unsubscribe();
    }
  }
}

