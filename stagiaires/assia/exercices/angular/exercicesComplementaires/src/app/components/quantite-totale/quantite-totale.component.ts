import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../../model/item';

@Component({
  selector: 'app-quantite-totale',
  templateUrl: './quantite-totale.component.html',
  styleUrls: ['./quantite-totale.component.css']
})
export class QuantiteTotaleComponent implements OnInit {
  @Input() itemList: Item[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  getTotaleQte(): number{
  return this.itemList.reduce((acc, curr) => acc + curr.getQt(), 0);
  }
}
