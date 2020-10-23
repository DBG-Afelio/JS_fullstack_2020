import { Component,  OnInit,  } from '@angular/core';
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
      this.createListArticles();
  }

  createListArticles() {
    if (this.currentUser.roles === 'ADMIN') {
      this.articleService.getList().subscribe(list => { 
        this.listArticles = list;
      });
    } else if (this.currentUser.roles === 'AUTHOR') {
      this.articleService.getMyArticles().subscribe(list => { 
        this.listArticles = list;
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
