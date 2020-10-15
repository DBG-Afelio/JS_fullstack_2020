import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Author } from 'src/app/models/authorModels/Author';
import { AuthorService } from 'src/app/services/authorServices/author.service';
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';
import { merge, fromEvent } from "rxjs";
import { AuthorsDataSource } from './authors-admin-datasource';


@Component({
  selector: 'app-authors-admin',
  templateUrl: './authors-admin.component.html',
  styleUrls: ['./authors-admin.component.css']
})
export class AuthorsAdminComponent implements AfterViewInit, OnInit {

  public listAuthors: Author[];
  dataSource: AuthorsDataSource;
  displayedColumns= ["id", "familyname", "firstname", "user"];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('input') input: ElementRef;


  constructor(
      private authorService: AuthorService,
    ) {
      this.createListAuthors();
  }

  createListAuthors() {
    this.authorService.getList().subscribe(list => { 
      this.listAuthors = list;
    });
  }
  
  ngOnInit() {
    this.dataSource = new AuthorsDataSource(this.authorService);
    this.dataSource.loadAuthors('', 'asc', 0, 10).subscribe(() => this.initSort());
  }

  initSort() {
      this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
      fromEvent(this.input.nativeElement,'keyup')
          .pipe(
              debounceTime(150),
              distinctUntilChanged(),
              tap(() => {
                  this.paginator.pageIndex = 0;
                  this.loadAuthorsPage();
              })
          )
          .subscribe();

      merge(this.sort.sortChange, this.paginator.page)
      .pipe(
          tap(() => this.loadAuthorsPage())
      )
      .subscribe();
  }

  loadAuthorsPage() {
    this.dataSource.loadAuthors(
        this.input.nativeElement.value,
        this.sort.direction,
        this.paginator.pageIndex,
        this.paginator.pageSize);
  }

  ngAfterViewInit() {
    
  }

  public onDelete(author: Author) {
    if (confirm("Êtes-vous sûr de vouloir supprimer cet auteur")) {
      this.authorService.removeAuthor(author).subscribe(() => {
        this.createListAuthors();
      });
    }
  }
}
