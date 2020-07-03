import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/service/article.service';
import { Article } from 'src/app/model/Article';

@Component({
  selector: 'app-show-article',
  templateUrl: './show-article.component.html',
  styleUrls: ['./show-article.component.css']
})
export class ShowArticleComponent implements OnInit {
  article: Article;
  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
  }

  getArticle(id: number) {
    this.articleService.getArticleById(id).subscribe(article => this.article = article);
  }
}
