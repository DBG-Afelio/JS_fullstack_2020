import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article/article';
import { ArticlesService } from 'src/app/services/articles.service';

@Component({
  selector: 'app-list-articles',
  templateUrl: './list-articles.component.html',
  styleUrls: ['./list-articles.component.css']
})
export class ListArticlesComponent implements OnInit {

  articles:Article[];

  constructor(public articlesService:ArticlesService) { }

  ngOnInit(): void {
    
    this.loadComponent()
     
  }

  loadComponent(){

   return this.articlesService.getAllArticles().subscribe(articles =>{

      this.articles = articles

    } )
  }
  onArticleDelete(articleId:number){

    this.articlesService.deleteArticle(articleId).subscribe()

  }

}
