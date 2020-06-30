import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Article } from 'src/app/model/Article';
@Component({
  selector: 'app-details-article',
  templateUrl: './details-article.component.html',
  styleUrls: ['./details-article.component.css']
})
export class DetailsArticleComponent implements OnInit {
  @Input() selection: Article;
  @Input() qtteIn: number;
  @Output() changedQtteEvent: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
  }
  relayQtteEvent(qt: number): void {
    this.changedQtteEvent.emit(qt);
  }
  
}
