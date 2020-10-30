import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Item} from '../shared/item';

@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.scss']
})
export class ShoppingItemComponent implements OnInit {


  @Output() OnRemove: EventEmitter<Item> = new EventEmitter();


  @Input() shoppingItem: Item;

  constructor() {

  }

  ngOnInit(): void {
  }


}
