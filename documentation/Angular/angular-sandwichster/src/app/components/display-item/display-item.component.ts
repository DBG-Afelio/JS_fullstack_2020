import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {
  ComponentRef,
  ComponentFactoryResolver,
  ViewContainerRef,
  ViewChild,
  ViewRef
} from "@angular/core";

import{ ListItemsService } from '../../services/list-items.service';
import { Item } from '../../interfaces/item';


@Component({
  selector: 'app-display-item',
  templateUrl: './display-item.component.html',
  styleUrls: ['./display-item.component.css']
})
export class DisplayItemComponent implements OnInit {
  public visible: boolean = false;
  public listProducts: Item[];
  
  @Input() item: Item;
  @Output() selectedProduct = new EventEmitter<Item>();

  constructor() {}

  ngOnInit() {
  }
  
  onProductSelection(){
    this.selectedProduct.emit(this.item);
  }
  onDisplayDetails(id){
    console.log(id);
  }
  modifyItem(id){
    console.log(id);
    this.visible = true;
  }
  closeModifyPannel(){
    this.visible = false;
  }
}
