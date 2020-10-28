import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  ShoppingItem = [];

  productName: string;
  qte: number;

  constructor() {
  }

  ngOnInit(): void {
  }

  onItemAdded() {
    this.ShoppingItem.push({Name: this.productName, Qte: this.qte});
    this.productName = '';
    this.qte = 0;
  }

}
