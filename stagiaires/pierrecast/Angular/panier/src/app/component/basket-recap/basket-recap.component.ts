import { Component, OnInit, Input } from '@angular/core';
import { Command } from 'src/app/model/Command';
import { ShopService } from 'src/app/service/shop.service';
import { Article } from 'src/app/model/Article';
import { BasketService } from 'src/app/service/basket.service';

@Component({
  selector: 'app-basket-recap',
  templateUrl: './basket-recap.component.html',
  styleUrls: ['./basket-recap.component.css']
})
export class BasketRecapComponent implements OnInit {
  
  @Input() listCommands: Command[]

  constructor(public shopService: ShopService, private basketService: BasketService) { }

  public getArticleById(id: number): Article {
    return this.shopService.getArticleById(id);
  }

  ngOnInit(): void {
  }

  public changeCommandQuantity(qt: number, command :Command) {
      this.basketService.getBasket().updateBasket(command.getArticle(), qt, command.getPrice());
  }
}
