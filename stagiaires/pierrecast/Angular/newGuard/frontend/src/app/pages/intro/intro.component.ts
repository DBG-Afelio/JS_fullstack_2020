import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/articleModels/Article';
import { ArticleService } from 'src/app/services/articleServices/article.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  
  public listArticles: Article[];
  public height: number;

  constructor(
    private articleService: ArticleService
  ) { 
    this.articleService.getList().subscribe(list => {
      this.listArticles = list;
      this.height = Math.ceil(this.listArticles.length/3+1)*850;
    
    });
  }

  ngOnInit(): void {
  }


}
