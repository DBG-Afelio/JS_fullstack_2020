import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Article } from 'src/app/model/Article';
@Component({
  selector: 'app-details-article',
  templateUrl: './details-article.component.html',
  styleUrls: ['./details-article.component.css']
})
export class DetailsArticleComponent implements OnInit {
  @Input() selection: Article = null;
  @Input() qtteIn = 0;
  @Input() min = 0;
  @Input() max = 10;
  @Input() step = 1;
  @Output() changedQtteEvent: EventEmitter<{ art: Article, qte: number }> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  add(): void {
    if (this.qtteIn + this.step <= this.max) {
      this.qtteIn += this.step;
      this.changedQtteEvent.emit({ art: this.selection, qte: this.qtteIn });
    }
  }

  remove(): void {
    if (this.qtteIn - this.step >= this.min) {
      this.qtteIn -= this.step;
      this.changedQtteEvent.emit({ art: this.selection, qte: this.qtteIn });
    }
  }
  // changeQtte(article: Article, qte: number): void{
  //   this.changedQtteEvent.emit({ art: this.selection, qte: this.qtteIn });
  // }
}
