import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-basket-totals',
  templateUrl: './basket-totals.component.html',
  styleUrls: ['./basket-totals.component.css']
})
export class BasketTotalsComponent implements OnInit {

  @Input() totalPrice: number;

  constructor() { }

  ngOnInit(): void {
  }

}
