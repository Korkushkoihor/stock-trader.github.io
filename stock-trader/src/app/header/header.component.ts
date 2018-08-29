import {Component, OnDestroy, OnInit} from '@angular/core';
import {StockService} from "../services/stock.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  public navLinks = [
    {path: '/markets', label: 'List of markets'},
    {path: '/portfolio', label: 'User portfolio'}
  ];
  public amountMoney: number = 0;
  public amountMoneySubscription: Subscription;

  constructor(private stockService: StockService) {
  }

  ngOnInit() {
    this.amountMoneySubscription = this.stockService.amountMoneySubject.subscribe((_money) => {
      this.amountMoney = _money;
    })
  }

  ngOnDestroy() {
    if (this.amountMoneySubscription) {
      this.amountMoneySubscription.unsubscribe();
    }
  }

}
