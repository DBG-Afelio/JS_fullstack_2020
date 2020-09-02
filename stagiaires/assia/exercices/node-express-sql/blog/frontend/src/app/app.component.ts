import { Component } from '@angular/core';
import { Article } from './models/articleModel/Article';
import { ArticlesService } from './services/articles/articles.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Blog';

  // public articleList: Article[] = [];
  // constructor(
  //   private articleService: ArticlesService
  // ) { 
  //   this.articleService.getArticleList().subscribe((list) => {
  //     this.articleList = list;
  //     console.log('mes articles : ', this.articleList);
  //   });
  // }
}
