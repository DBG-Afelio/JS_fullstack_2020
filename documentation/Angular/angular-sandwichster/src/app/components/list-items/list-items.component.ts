import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

import { Item } from 'src/app/interfaces/item';
import { ListItemsService } from '../../services/list-items.service'

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit {

@Output() selectedProductEvent = new EventEmitter<Item>();

@Input() listProducts;
@Input() supplier;

  constructor(
    private listItemsService: ListItemsService,
    private routeur: Router
  ) {}

  ngOnInit() {}

  onProductSelection(item){
    this.selectedProductEvent.emit(item);
  }

  changeProducts(product){
    this.listItemsService.updateItem(product).subscribe(()=>
    this.routeur.navigate([""]) 
    );
  }


}
