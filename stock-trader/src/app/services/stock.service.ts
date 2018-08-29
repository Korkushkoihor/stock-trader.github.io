import {Injectable} from '@angular/core';
import {mockList, moneyAmount} from "../mock/stock";
import {MarketModel} from "../model/MarketModel";
import {BehaviorSubject, Subject} from "rxjs";
import {MarketBoughtModel} from "../model/MarketBoughtModel";

@Injectable({
  providedIn: 'root'
})
export class StockService {

  public amountMoneySubject = new BehaviorSubject<number>(moneyAmount);
  public changedBoughtArraySubject = new Subject<MarketBoughtModel[]>();

  private amountMoney: number = moneyAmount;
  private _arrayStock: MarketModel[] = mockList;
  get arrayStock(): MarketModel[] {
    return this._arrayStock;
  }

  set arrayStock(_arrayStock: MarketModel[]) {
    this._arrayStock = _arrayStock;
  }

  private _arrayBoughtStocks: MarketBoughtModel[] = [];
  get arrayBoughtStocks(): MarketBoughtModel[] {
    return this._arrayBoughtStocks;
  }

  set arrayBoughtStocks(_arrayBoughtStocks: MarketBoughtModel[]) {
    this._arrayBoughtStocks = _arrayBoughtStocks;
  }

  constructor() {
    this._arrayStock.forEach(function (obj) {
      obj['quantityToBS'] = 1
    });
  }

  public buyMarket(_market: MarketModel, _quantity: number) {
    console.log(_quantity);

    if (this.amountMoney - +_market.price * _quantity < 0) {
      return;
    }
    this.amountMoney -= +_market.price * _quantity;

    this.amountMoneySubject.next(this.amountMoney);
    for (let i = 0; i < this._arrayBoughtStocks.length; i++) {
      if (this._arrayBoughtStocks[i].id == _market.id) {
        this._arrayBoughtStocks[i].quantity += _quantity;
        return;
      }
    }
    this._arrayBoughtStocks.push(
      new MarketBoughtModel(_market.id, _market.name, _market.price, _market.category, _quantity))
  }

  public sellMarket(_market: MarketBoughtModel, _quantity: number) {
    for (let i = 0; i < this._arrayBoughtStocks.length; i++) {
      if (this._arrayBoughtStocks[i].id == _market.id) {

        if (this._arrayBoughtStocks[i].quantity >= _quantity) {
          this.amountMoney += +_market.price * _quantity;
        } else {
          this.amountMoney += +_market.price * _market.quantity;
        }
        this.amountMoneySubject.next(this.amountMoney);

        this._arrayBoughtStocks[i].quantity -= _quantity;
        if (+this._arrayBoughtStocks[i].quantity <= 0) {
          this._arrayBoughtStocks.splice(i, 1);
        }

        this.changedBoughtArraySubject.next(this._arrayBoughtStocks);
        break;
      }
    }
  }

}
