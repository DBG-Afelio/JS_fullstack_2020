import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Article } from 'src/app/article';
import { ArticlesService } from 'src/app/articles.service'
@Component({
  selector: 'app-list-articles',
  templateUrl: './list-articles.component.html',
  styleUrls: ['./list-articles.component.css']
})
export class ListArticlesComponent implements OnInit {
    tabArticles:Article[]=[]
    @Output() articleSelected:EventEmitter<Article>= new EventEmitter();
  constructor(private tabarticles:ArticlesService) { }

  ngOnInit(): void {
    this.tabArticles=this.tabarticles.getArticlesList();
  }
  clickArticle(article:Article):void{
      this.articleSelected.emit(article);
  }
}
