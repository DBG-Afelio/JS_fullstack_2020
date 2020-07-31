import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/productModel/Product';
import { User } from 'src/app/models/userModel/user';

@Component({
  selector: 'app-detail-item',
  templateUrl: './detail-item.component.html',
  styleUrls: ['./detail-item.component.css']
})
export class DetailItemComponent implements OnInit {

  @Input() product: Product;
  @Input() currentUser: User;

  constructor() { }

  ngOnInit(): void {
  }

}
