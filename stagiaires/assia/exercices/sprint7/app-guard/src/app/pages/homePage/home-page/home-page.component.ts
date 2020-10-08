import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StatusEnum } from 'src/app/enum/status.enum';
import { Article } from 'src/app/models/Article/Article.model';
import { ArticlesService } from 'src/app/services/articles.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  public articleList: Article[] = [];
  constructor(private artService: ArticlesService) {}

  ngOnInit(): void {
    this.artService.getAll().subscribe((list) => {
      this.articleList = list.filter(
        (article: Article) => article.status === StatusEnum.PUBLISHED
      );
    });
  }
}
