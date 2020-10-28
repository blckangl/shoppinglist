import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.scss']
})
export class ShoppingItemComponent implements OnInit {

  @Input() Name;
  @Input() Qte;
  constructor() { }

  ngOnInit(): void {
  }

}