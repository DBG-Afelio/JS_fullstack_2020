import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ArticlesAdminDataSource, ArticlesAdminItem } from './articles-admin-datasource';

@Component({
  selector: 'app-articles-admin',
  templateUrl: './articles-admin.component.html',
  styleUrls: ['./articles-admin.component.css']
})
export class ArticlesAdminComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<ArticlesAdminItem>;
  dataSource: ArticlesAdminDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'title', 'date', 'author'];

  ngOnInit() {
    this.dataSource = new ArticlesAdminDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}


/* constructor(private articleService: ArticleService) {
    super();

    this.articleService.getList().subscribe(list => {
      this.listArticles = list
    });
  } */