import {CollectionViewer, DataSource} from "@angular/cdk/collections";
import {Observable, BehaviorSubject, of} from "rxjs";
import {catchError, finalize, map} from "rxjs/operators";
import { Article } from 'src/app/models/articleModels/Article';
import { ArticleService } from 'src/app/services/articleServices/article.service';

export class ArticlesDataSource implements DataSource<Article> {
    private articlesSubject = new BehaviorSubject<Article[]>([]);
    private loadingSubject = new BehaviorSubject<boolean>(false);
    public loading$ = this.loadingSubject.asObservable();

    constructor(
      private articleService: ArticleService
    ) {}

    loadArticles(filter:string,
                sortDirection:string,
                pageIndex:number,
                pageSize:number) {

        this.loadingSubject.next(true);

        return this.articleService.findArticles(filter, sortDirection,
            pageIndex, pageSize).pipe(
                catchError(() => of([])),
                finalize(() => this.loadingSubject.next(false))
            )
            .pipe(
                map(articles => this.articlesSubject.next(articles))
            );

    }

    connect(collectionViewer: CollectionViewer): Observable<Article[]> {
        console.log("Connecting data source");
        return this.articlesSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.articlesSubject.complete();
        this.loadingSubject.complete();
    }
}
