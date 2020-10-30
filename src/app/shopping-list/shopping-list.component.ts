import {Component, OnInit} from '@angular/core';
import {Item} from '../shared/item';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  ShoppingItems: Item[];

  productName: string;
  qte = 0;

  firstItemId = 0;

  constructor() {
    this.ShoppingItems = [];
  }

  ngOnInit(): void {
  }

  onItemAdded(): void {
    const shoppingItem = new Item();
    shoppingItem.Name = this.productName;
    shoppingItem.Qte = this.qte;
    shoppingItem.id = this.firstItemId;
    this.ShoppingItems.push(shoppingItem);
    this.productName = '';
    this.qte = 0;
    this.firstItemId++;
  }

}
