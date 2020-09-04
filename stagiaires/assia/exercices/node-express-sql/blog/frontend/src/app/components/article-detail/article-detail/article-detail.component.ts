import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'src/app/models/articleModel/Article';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {
  @Input() articleIn: Article;
  constructor() { }

  ngOnInit(): void {
  }

  
}
