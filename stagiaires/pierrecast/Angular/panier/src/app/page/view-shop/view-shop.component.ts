import { Component, OnInit } from '@angular/core';
import { ShopService } from 'src/app/service/shop.service';
import { Article } from 'src/app/model/Article';
import { Basket } from 'src/app/model/Basket';
import { BasketService } from 'src/app/service/basket.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-shop',
  templateUrl: './view-shop.component.html',
  styleUrls: ['./view-shop.component.css']
})
export class ViewShopComponent implements OnInit {
  public listArticles: Article[] = [];
  public basket: Basket;
  public currentArticle: Article;
  private location: Location;
  private route: ActivatedRoute;

  constructor(
    public shopService:ShopService,
    private basketService: BasketService,
    ) {
    this.listArticles = this.shopService.getListArticles();
    this.basket = this.basketService.getBasket();
    this.currentArticle = this.listArticles[0];
  }

  public changeCurrent(article: Article) {
    this.currentArticle = article;
  }

  public changeQuantity(qt: number) {
    this.basket.updateBasket(this.currentArticle, qt, this.currentArticle.getPrice());
  }

  ngOnInit(): void {
   this.getArticle();
  }

  public getArticle(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    const article = this.shopService.getArticleById(id);
    return this.changeCurrent(article);
  }
}
