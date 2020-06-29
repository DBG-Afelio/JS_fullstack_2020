import { Component, OnInit, Output } from '@angular/core';
import { Shop } from 'src/app/model/Shop';
import { SOURCE } from 'src/app/model/source';

@Component({
  selector: 'app-e-shop-page',
  templateUrl: './e-shop-page.component.html',
  styleUrls: ['./e-shop-page.component.css']
})
export class EShopPageComponent implements OnInit {
  articlesEnStock = new Shop(SOURCE);
  constructor() { }

  ngOnInit(): void {
  }

}
