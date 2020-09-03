import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/articleModel/Article';
import { ArticleService } from 'src/app/services/articleService/article.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  public listArticles: Article[] = [];
  
  constructor(private articleService: ArticleService) {
    this.articleService.getList().subscribe((list) => {
      this.listArticles = list;
    });
  }

  ngOnInit(): void {
  }

}
