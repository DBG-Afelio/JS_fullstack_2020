import {CollectionViewer, DataSource} from "@angular/cdk/collections";
import {Observable, BehaviorSubject, of} from "rxjs";
import {catchError, finalize, map} from "rxjs/operators";
import { Author } from 'src/app/models/authorModels/Author';
import { AuthorService } from 'src/app/services/authorServices/author.service';

export class AuthorsDataSource implements DataSource<Author> {
    private authorsSubject = new BehaviorSubject<Author[]>([]);
    private loadingSubject = new BehaviorSubject<boolean>(false);
    public loading$ = this.loadingSubject.asObservable();

    constructor(
      private authorService: AuthorService
    ) {}

    loadAuthors(filter:string,
                sortDirection:string,
                pageIndex:number,
                pageSize:number) {

        this.loadingSubject.next(true);

        return this.authorService.findAuthors(filter, sortDirection,
            pageIndex, pageSize).pipe(
                catchError(() => of([])),
                finalize(() => this.loadingSubject.next(false))
            )
            .pipe(
                map(authors => this.authorsSubject.next(authors))
            );

    }

    connect(collectionViewer: CollectionViewer): Observable<Author[]> {
        console.log("Connecting data source");
        return this.authorsSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.authorsSubject.complete();
        this.loadingSubject.complete();
    }
}
