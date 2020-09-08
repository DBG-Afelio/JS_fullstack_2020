import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'src/app/models/articleModel/Article';
import { ArticlesService } from 'src/app/services/articles/articles.service';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.css']
})
export class HomeViewComponent implements OnInit {

  public articleList: Article[] = [];

  constructor(
    private articleService: ArticlesService
  ) { 
    this.articleService.getArticleList().subscribe((list) => {
      this.articleList = list;
      console.log('mes articles : ', this.articleList);
    });
  }
  ngOnInit(): void {
  }

}
