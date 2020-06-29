import { Component, OnInit, Input } from '@angular/core';
import { IArticle } from 'src/app/interfaces/iarticle';


@Component({
  selector: 'app-details-article',
  templateUrl: './details-article.component.html',
  styleUrls: ['./details-article.component.css']
})
export class DetailsArticleComponent {}

//  export class DetailsArticleComponent implements OnInit {
//    @Input() selected: IArticle;
//    quantite: number;

//    constructor(qte: number) {
//      this.quantite = qte;
//    }

//    ngOnInit(): void {
//    }

//    getQte(): number {
//      return this.quantite;
//    }
// }
