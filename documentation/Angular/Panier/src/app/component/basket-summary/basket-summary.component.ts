import { Basket } from './../../model/Basket';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-basket-summary',
  templateUrl: './basket-summary.component.html',
  styleUrls: ['./basket-summary.component.css']
})
export class BasketSummaryComponent implements OnInit {

  @Input() totalPrice: number;
  @Input() totalQt: number;

  constructor() { }

  ngOnInit() {
  }

}