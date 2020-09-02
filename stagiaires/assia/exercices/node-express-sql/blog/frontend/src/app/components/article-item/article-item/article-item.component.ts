import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'src/app/models/articleModel/Article';

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.css']
})
export class ArticleItemComponent implements OnInit {

  @Input() articleIn: Article;
  constructor() { }

  ngOnInit(): void {
  }

}
