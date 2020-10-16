import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/models/articleModels/Article';
import { ArticleService } from 'src/app/services/articleServices/article.service';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.css']
})
export class ArticlePageComponent implements OnInit {

  public article: Article;

  constructor(
    private articleService: ArticleService,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.paramMap.subscribe(params => {
      let articleId = Number(params.get('id'));
      this.getArticle(articleId);
      }); 
  }

  getArticle(articleId: number): void {
    this.articleService.getArticleById(articleId).subscribe((article) => {
      this.article = article;
    })
  }

  ngOnInit(): void {
  }
}
