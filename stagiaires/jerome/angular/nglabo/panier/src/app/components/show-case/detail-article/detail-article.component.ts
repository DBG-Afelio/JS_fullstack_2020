import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Article } from 'src/app/article';

@Component({
  selector: 'app-detail-article',
  templateUrl: './detail-article.component.html',
  styleUrls: ['./detail-article.component.css']
})
export class DetailArticleComponent implements OnInit {
    @Input() articleDetail:Article;
    @Output() setQuantityEvent:EventEmitter<number>=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  setQuantity(quantity:number):void{
      this.setQuantityEvent.emit(quantity);
  }
}
