import { DecimalPipe } from '@angular/common';
import { Component,  OnInit,  } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Article } from 'src/app/models/articleModels/Article';
import { ArticleService } from 'src/app/services/articleServices/article.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-articles-admin',
  templateUrl: './articles-admin.component.html',
  styleUrls: ['./articles-admin.component.css']
})
export class ArticlesAdminComponent implements  OnInit {

  public listArticles: Article[];
  public page: number = 1;
  public pageSize: number = 6;
  public collectionSize: number;
  public currentUser : any;
  public filter = new FormControl('');


  constructor(
    private articleService: ArticleService, 
    private authService: AuthService,
    pipe: DecimalPipe
  ) {
    this.authService.getCurrentUser().subscribe(
      (user: any) => {
        this.currentUser = user;
        
      }
    );
    this.createListArticles();
    /*this.countries$ = this.filter.valueChanges.pipe(
      startWith(''),
      map(text => search(text, pipe))
    );*/
  }

  createListArticles() {
    if (this.currentUser.roles === 'ADMIN') {
      this.articleService.getList().subscribe(list => { 
        this.listArticles = list.slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
        this.collectionSize = list.length;
      });
    } else if (this.currentUser.roles === 'AUTHOR') {
      this.articleService.getMyArticles().subscribe(list => { 
        this.listArticles = list.slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
        this.collectionSize = list.length;
      });
    }
  }
  
  ngOnInit() {}

  public onDelete(article: Article) {
    if (confirm("Êtes-vous sûr de vouloir supprimer cet article")) {
      this.articleService.removeArticle(article).subscribe(() => {
        this.createListArticles();
      });
    }
  }
}
