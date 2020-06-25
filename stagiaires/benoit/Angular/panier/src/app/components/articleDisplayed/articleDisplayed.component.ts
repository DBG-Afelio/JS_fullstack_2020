import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/Product';

@Component({
  selector: 'app-articleDisplayed',
  templateUrl: './articleDisplayed.component.html',
  styleUrls: ['./articleDisplayed.component.css']
})

export class ArticleDisplayedComponent implements OnInit {

  @Input() product: Product;

  constructor() { }

  ngOnInit() {
  }

  onSelect(hero){
    console.log("yep" + hero);
  }
}
