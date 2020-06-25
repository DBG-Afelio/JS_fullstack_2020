import { Component, OnInit, Input } from '@angular/core';
import { ShopService } from 'src/app/service/shop.service';
import { Shop } from 'src/app/model/Shop';
import { Article } from 'src/app/model/Article';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  @Input() listArticles: Article[] = [];

  constructor() { 
    
  }

  ngOnInit(): void {
  }

}
