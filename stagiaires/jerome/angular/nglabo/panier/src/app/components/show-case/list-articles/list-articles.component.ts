import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/article';
import { ArticlesService } from 'src/app/articles.service'
@Component({
  selector: 'app-list-articles',
  templateUrl: './list-articles.component.html',
  styleUrls: ['./list-articles.component.css']
})
export class ListArticlesComponent implements OnInit {
    tabArticles:Article[]=[]
  constructor(private tabarticles:ArticlesService) { }

  ngOnInit(): void {
    this.tabArticles=this.tabarticles.getArticlesList();
  }

}
