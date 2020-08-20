import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { Article } from 'src/app/models/article.model';

@Component({
  selector: 'app-show-article',
  templateUrl: './show-article.component.html',
  styleUrls: ['./show-article.component.css']
})
export class ShowArticleComponent implements OnInit {
  article: Article
  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
  }
  getArticle(id: number){
    this.articleService.getArticleById(id).subscribe((article) => this.article = article);
  }
  getCategory(articleId: number){
    this.articleService.getArticleCategory(articleId).subscribe(category => console.log(category));
  }
}
