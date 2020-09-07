import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'backend/src/models/articles_models';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-list-articles',
  templateUrl: './list-articles.component.html',
  styleUrls: ['./list-articles.component.scss']
})
export class ListArticlesComponent implements OnInit {

  @Input() listArticles: Article[];
  public datePipeString : string;

  constructor(private datePipe: DatePipe) {
    
  }

  public transformDate(date : Date): string {    
    return this.datePipe.transform(date, 'dd/MM/yyyy');
  }

  ngOnInit(): void {
  }

}
