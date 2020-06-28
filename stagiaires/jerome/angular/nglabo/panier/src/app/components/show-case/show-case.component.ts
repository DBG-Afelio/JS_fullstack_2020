import { Component, OnInit } from '@angular/core';
import { ArticlesService } from 'src/app/articles.service';
import { Article } from 'src/app/article';
import { PanierService } from '../../service/panier.service'
import { Basket } from 'src/app/model/basket';

@Component({
  selector: 'app-show-case',
  templateUrl: './show-case.component.html',
  styleUrls: ['./show-case.component.css']
})
export class ShowCaseComponent implements OnInit {
    tabArticles:Article[];
    currentArticleSelected:Article;
    currentPanierArticle:Basket;
  constructor(private tabarticlesService:ArticlesService, private panierService:PanierService) { 
    this.tabArticles=this.tabarticlesService.getArticlesList();
    this.currentArticleSelected=this.tabArticles[0];
    this.currentPanierArticle=this.panierService.getBasket();
   
  }

  ngOnInit(): void {
  }
  updateSelectedArticle(article:Article):void{
    this.currentArticleSelected=article;
  }
  changeQt(quantity:number){
    this.currentPanierArticle.updateBasket(this.currentArticleSelected,quantity,parseFloat(this.currentArticleSelected.Prix));
  }
}
