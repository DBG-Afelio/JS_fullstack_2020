import { Component, OnInit } from '@angular/core';

import { products } from '../../sourceJSON';

@Component({
  selector: 'app-listAside',
  templateUrl: './listAside.component.html',
  styleUrls: ['./listAside.component.css']
})
export class ListAsideComponent implements OnInit {
  products = products;
  selectedProduct;
  constructor() { }

  ngOnInit() {
  }

  onSelect(product): void{
    console.log(product);
    this.selectedProduct = product;
  }

}
