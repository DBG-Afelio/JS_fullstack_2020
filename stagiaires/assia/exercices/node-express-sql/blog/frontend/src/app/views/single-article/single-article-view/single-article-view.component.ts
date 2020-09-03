import { Component, OnInit } from '@angular/core';
import { Commentaire } from 'src/app/models/commentaireModel/Commentaire';
import { Article } from 'src/app/models/articleModel/Article';
import { CommentairesService } from 'src/app/services/commentaires/commentaires.service';
import { ActivatedRoute } from '@angular/router';
import { ArticlesService } from 'src/app/services/articles/articles.service';

@Component({
  selector: 'app-single-article-view',
  templateUrl: './single-article-view.component.html',
  styleUrls: ['./single-article-view.component.css']
})
export class SingleArticleViewComponent implements OnInit {
  public artCommentList: Commentaire[] = [];
  //public authorList: [] = [];
  public currentArticle: Article;

  constructor(
    private commentService: CommentairesService,
    private articleService: ArticlesService,
    private activeRoute: ActivatedRoute
  ) { 
    this.activeRoute.paramMap.subscribe(params => {
      let articleId = Number(params.get('id'));
      this.articleService.getArticleById(articleId).subscribe((article) => this.currentArticle = article);
      this.commentService.getCommentList().subscribe((fullCommentList) => {
        this.artCommentList = fullCommentList.filter((comment) => comment.getArticleId() === articleId);
      })
    });
  }
  ngOnInit(): void {
  }

}
