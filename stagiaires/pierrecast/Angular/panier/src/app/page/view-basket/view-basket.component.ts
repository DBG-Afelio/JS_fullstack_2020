import { Component, OnInit } from '@angular/core';
import { BasketService } from 'src/app/service/basket.service';
import { Command } from 'src/app/model/Command';
import { Basket } from 'src/app/model/Basket';

@Component({
  selector: 'app-view-basket',
  templateUrl: './view-basket.component.html',
  styleUrls: ['./view-basket.component.css']
})
export class ViewBasketComponent implements OnInit {
  public listCommands: Command[] = [];
  public basket: Basket;

  constructor(private basketService: BasketService) { 
    this.basket = this.basketService.getBasket();
    this.listCommands = this.basketService.getListCommands();
  }

  ngOnInit(): void {
  }
}
