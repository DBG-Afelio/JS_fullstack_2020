import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Article } from 'src/app/models/article/article';

@Component({
  selector: 'app-article-resume',
  templateUrl: './article-resume.component.html',
  styleUrls: ['./article-resume.component.css']
})
export class ArticleResumeComponent implements OnInit {

  @Input() article:Article
  @Output() deleteArticle = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  onDeleteButtonClick(){

    const confirmDelete = confirm("supprimer l'article ?");

    if(confirmDelete){
      this.deleteArticle.emit(this.article.id)
    }

  }

}
