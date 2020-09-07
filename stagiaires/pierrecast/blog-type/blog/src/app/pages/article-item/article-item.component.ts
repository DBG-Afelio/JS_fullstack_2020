import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/articleModel/Article';
import { ArticleService } from 'src/app/services/articleService/article.service';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.scss']
})
export class ArticleItemComponent implements OnInit {

  public datePipeString : string;
  public article: Article;

  constructor(
    public articleService: ArticleService, 
    public activatedRoute: ActivatedRoute, 
    private datePipe: DatePipe
  ) { 
    this.activatedRoute.paramMap.subscribe(params => {
      let id = Number(params.get('id'));
      this.articleService.getArticleWithAuteurById(id).subscribe(article => {
        this.article  = article;
        console.log(this.article);
      })
    });
  }

  public transformDate(date : Date): string {    
    return this.datePipe.transform(date, 'dd/MM/yyyy');
  }
  
  ngOnInit(): void {
  }

}
