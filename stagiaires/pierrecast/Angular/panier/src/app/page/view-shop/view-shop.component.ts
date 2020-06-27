import { Component, OnInit } from '@angular/core';
import { ShopService } from 'src/app/service/shop.service';
import { Article } from 'src/app/model/Article';
import { Basket } from 'src/app/model/Basket';
import { BasketService } from 'src/app/service/basket.service';

@Component({
  selector: 'app-view-shop',
  templateUrl: './view-shop.component.html',
  styleUrls: ['./view-shop.component.css']
})
export class ViewShopComponent implements OnInit {
  public listArticles: Article[] = [];
  public basket: Basket;
  public currentArticle: Article;

  constructor(
    public shopService:ShopService,
    private basketService: BasketService,
    ) {
    this.listArticles = this.shopService.getListArticles();
    this.basket = this.basketService.getBasket();
    this.currentArticle = this.listArticles[0];
  }

  changeCurrent(article: Article) {
    this.currentArticle = article;
  }

  changeQuantity(qt: number) {
    this.basket.updateBasket(this.currentArticle, qt, this.currentArticle.getPrice());
  }

  ngOnInit(): void {
  }
}
