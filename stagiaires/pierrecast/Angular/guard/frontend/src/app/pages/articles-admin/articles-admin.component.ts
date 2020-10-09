import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/articleModels/Article';
import { ArticleService } from 'src/app/services/articleServices/article.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-articles-admin',
  templateUrl: './articles-admin.component.html',
  styleUrls: ['./articles-admin.component.css']
})
export class ArticlesAdminComponent implements AfterViewInit, OnInit {

  public listArticles: Article[];
  public currentUser : any;
  constructor(
      private articleService: ArticleService, 
      private authService: AuthService
    ) {
      
      this.authService.getCurrentUser().subscribe(
        (user: any) => {
          this.currentUser = user;
          
        }
      );
  }

  createListArticles() {
    if (this.currentUser.roles === 'ADMIN') {
      this.articleService.getList().subscribe(list => { 
        this.listArticles = list;
      });
    }
    if (this.currentUser.roles === 'AUTHOR') {
      this.articleService.getMyArticles().subscribe(list => { 
        this.listArticles = list;
      });
    }
  }
  
  ngOnInit() {
    
  }

  ngAfterViewInit() {
    
  }

  public onDelete(article: Article) {
    if (confirm("Êtes-vous sûr de vousloir supprimer cet article")) {
      this.articleService.removeArticle(article).subscribe(() => {
        this.createListArticles();
      });
    }
  }
}
