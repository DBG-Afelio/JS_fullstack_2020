import { Component, OnInit } from '@angular/core';
import { ArticlesService } from 'src/app/services/articles/articles.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/app/models/articleModel/Article';
import { CreateArticleDto } from 'src/app/models/articleModel/ArticleDto';

@Component({
  selector: 'app-article-form-view',
  templateUrl: './article-form-view.component.html',
  styleUrls: ['./article-form-view.component.css']
})
export class ArticleFormViewComponent implements OnInit {
  
  public article: Article = null;
  public authorList: 1; // pour test only, a terme a recuperer du server

  constructor(
    private articleService: ArticlesService,
    private activeRoute: ActivatedRoute,
    private router: Router,
  ) { 
    this.activeRoute.paramMap.subscribe(params => {
      let articleId = Number(params.get('id'));
      if (articleId) {
        this.articleService.getArticleById(articleId).subscribe((article) => this.article = article);
      } else {
        this.article = new Article(0, '', '', 0, new Date(), false);
      }
    });
  }

  ngOnInit(): void {
  }

  public saveArticle(title: string, content: string, authorId: number, isPublished: boolean): void {
    //categorie a ajouter
    this.article.setTitle(title);
    this.article.setContent(content);
    this.article.setAuthorId(authorId);
    this.article.setIsPublished(isPublished);
    console.log('mon article a sauver (saveArticle) : ', this.article);
    if (this.article.getId() === 0) {
      this.articleService.addNewArticle(this.article).subscribe((valrecue) => {
        this.router.navigate([`/article/${valrecue.getId()}`]);
      });
    } else {
      this.articleService.updateArticle(this.article).subscribe((valrecue) => {
        this.router.navigate([`/article/${valrecue.getId()}`]);

      });
    }
  }

}
