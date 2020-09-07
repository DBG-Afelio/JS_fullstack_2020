import { Component, OnInit } from '@angular/core';
import { ArticlesService } from 'src/app/services/articles.service';
import { Article } from 'src/app/models/article/article';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/models/user/user';

@Component({
  selector: 'app-display-article',
  templateUrl: './display-article.component.html',
  styleUrls: ['./display-article.component.css']
})
export class DisplayArticleComponent implements OnInit {

  article:Article;
  author:User;

  constructor(private articlesService:ArticlesService,
              private usersService:UsersService,
              private currentRoute:ActivatedRoute) {

    this.loadComponent()
          
  }

  ngOnInit(): void {
  }

  loadComponent(){

    this.setArticle()

  }
  setArticle(){

    this.currentRoute.params.subscribe(params => {

      this.articlesService.getArticleById(Number(params.articleId)).subscribe(articleFound => {

        this.article = articleFound
        this.setAuthor()

      })
    })
  }
  
  setAuthor(){

    this.usersService.getUserById(this.article.auteurId).subscribe(userFound => {

      this.author = userFound

    })

  }
}
