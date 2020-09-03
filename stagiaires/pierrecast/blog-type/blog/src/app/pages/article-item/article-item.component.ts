import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/articleModel/Article';
import { ArticleService } from 'src/app/services/articleService/article.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.scss']
})
export class ArticleItemComponent implements OnInit {

  public article: Article;

  constructor(public articleService: ArticleService, public activatedRoute: ActivatedRoute) { 
    this.activatedRoute.paramMap.subscribe(params => {
      let id = Number(params.get('id'));
      this.articleService.getArticleById(id).subscribe(article => {
        this.article = article;
        console.log(article);
      })
    });
  }
  
  ngOnInit(): void {
  }

}
