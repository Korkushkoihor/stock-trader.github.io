export class MarketModel {
  id: number;
  name: string;
  price: string;
  category: string;
  constructor(_id: number, _name: string, _price: string, _category: string){
    this.id = _id;
    this.name = _name;
    this.price = _price;
    this.category = _category;
  }
}
