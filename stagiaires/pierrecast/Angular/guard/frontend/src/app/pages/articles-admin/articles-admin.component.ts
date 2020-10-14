import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Article } from 'src/app/models/articleModels/Article';
import { ArticleService } from 'src/app/services/articleServices/article.service';
import { AuthService } from 'src/app/services/auth.service';

import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';
import { merge, fromEvent } from "rxjs";
import { ArticlesDataSource } from './articles-admin-datasource';

@Component({
  selector: 'app-articles-admin',
  templateUrl: './articles-admin.component.html',
  styleUrls: ['./articles-admin.component.css']
})
export class ArticlesAdminComponent implements AfterViewInit, OnInit {

  public listArticles: Article[];
  dataSource: ArticlesDataSource;
  displayedColumns= ["id", "title", "date", "author"];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('input') input: ElementRef;


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
  
  ngOnInit() {
    this.dataSource = new ArticlesDataSource(this.articleService);
        this.dataSource.loadArticles('', 'asc', 0, 10).subscribe(() => this.initSort());
    }

    initSort() {
        this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
        fromEvent(this.input.nativeElement,'keyup')
            .pipe(
                debounceTime(150),
                distinctUntilChanged(),
                tap(() => {
                    this.paginator.pageIndex = 0;

                    this.loadArticlesPage();
                })
            )
            .subscribe();

        merge(this.sort.sortChange, this.paginator.page)
        .pipe(
            tap(() => this.loadArticlesPage())
        )
        .subscribe();

    }

    loadArticlesPage() {
        this.dataSource.loadArticles(
            this.input.nativeElement.value,
            this.sort.direction,
            this.paginator.pageIndex,
            this.paginator.pageSize);
    }

  ngAfterViewInit() {
    
  }

  public onDelete(article: Article) {
    if (confirm("Êtes-vous sûr de vouloir supprimer cet article")) {
      this.articleService.removeArticle(article).subscribe(() => {
        this.createListArticles();
      });
    }
  }
}
