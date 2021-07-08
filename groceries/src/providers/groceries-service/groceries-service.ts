import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as uuid from 'uuid';
/*
  Generated class for the GroceriesServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GroceriesServiceProvider {

  items = [
    {id: uuid.v4(), name: 'Bread', quantity: 4, price: 2.49},
    {id: uuid.v4(), name: 'Eggs', quantity: 2, price: 3.49}
  ];

  constructor(public http: HttpClient) {

  }

  getAllItems() {
    return this.items;
  }

  deleteItem(index) {
    this.items.splice(index, 1)
  }

  addItem(item) {
    this.items.push(item);
  }

  editItem(item, index) {
    this.items[index] = item;
  }

}
