import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute} from "@angular/router";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';
import { merge, fromEvent } from "rxjs";
import { Article } from 'src/app/models/articleModels/Article';
import { ArticlesDataSource } from './articles-admin-datasource';
import { ArticleService } from 'src/app/services/articleServices/article.service';


@Component({
    selector: 'article',
    templateUrl: './articles-admin.component.html',
    styleUrls: ['./articles-admin.component.css']
})
export class ArticlesAdminComponent implements OnInit {

    public listArticles: Article[];
    dataSource: ArticlesDataSource;
    displayedColumns= ["id", "title", "date", "author"];

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    @ViewChild('input') input: ElementRef;

    constructor(
      private route: ActivatedRoute,
      private articleService: ArticleService
    ) {
        this.articleService.getList().subscribe(list=> {
            this.listArticles = list;
        });

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
}
