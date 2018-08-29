import {Injectable} from '@angular/core';
import {mockList} from "../mock/stock";
import {MarketModel} from "../model/MarketModel";

@Injectable({
  providedIn: 'root'
})
export class StockService {
  public arrayStock: MarketModel[] = mockList;

  constructor() {
    console.log(this.arrayStock);
  }

}
