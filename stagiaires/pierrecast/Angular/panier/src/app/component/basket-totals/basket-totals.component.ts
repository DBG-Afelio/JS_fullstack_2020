import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'protractor';
import { Command } from 'src/app/model/Command';
import { Basket } from 'src/app/model/Basket';

@Component({
  selector: 'app-basket-totals',
  templateUrl: './basket-totals.component.html',
  styleUrls: ['./basket-totals.component.css']
})
export class BasketTotalsComponent implements OnInit {

  @Input() basket: Basket;
  @Input() totalPrice: number;


  constructor() { }

  ngOnInit(): void {
  }

  public clearBasket() {
    this.basket.getListCommands() = [];
  } 
}
