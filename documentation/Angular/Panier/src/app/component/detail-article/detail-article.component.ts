import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Article } from '../../model/Article';

@Component({
  selector: 'app-detail-article',
  templateUrl: './detail-article.component.html',
  styleUrls: ['./detail-article.component.css']
})
export class DetailArticleComponent implements OnInit {

  @Input() detailInfo: Article = null;
  @Output() changeQuantity: EventEmitter<number> = new EventEmitter();
  constructor() {
  }

  ngOnInit() {
  }

  changeQt(qt: number) {
    this.changeQuantity.emit(qt);
  }
}
