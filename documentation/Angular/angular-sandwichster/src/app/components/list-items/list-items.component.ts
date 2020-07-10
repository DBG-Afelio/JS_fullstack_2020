import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Item } from 'src/app/interfaces/item';


@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit {



@Output() selectedProduct2 = new EventEmitter<Item>();

@Input() listProducts;
@Input() supplier;

  constructor() {}

  ngOnInit() {}

  testEvent(item){
    this.selectedProduct2.emit(item);
  }


}
