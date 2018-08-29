import {MarketModel} from "./MarketModel";

export class MarketBoughtModel extends MarketModel {
  quantity: number;
  quantityToBS: number;

  constructor(_id: number, _name: string, _price: string, _category: string, _quantity: number) {
    super(_id, _name, _price, _category);
    this.quantity = _quantity;
    this.quantityToBS = 1;
  }
}
