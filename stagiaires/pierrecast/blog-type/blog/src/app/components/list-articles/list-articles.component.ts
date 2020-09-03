import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'backend/src/models/articles_models';

@Component({
  selector: 'app-list-articles',
  templateUrl: './list-articles.component.html',
  styleUrls: ['./list-articles.component.scss']
})
export class ListArticlesComponent implements OnInit {

  @Input() listArticles: Article[];
  constructor() { }

  ngOnInit(): void {
  }

}
