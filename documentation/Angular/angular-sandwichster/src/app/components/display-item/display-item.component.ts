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
import { SidebarComponent } from 'src/app/components/sidebar/sidebar.component'
import { ConditionalExpr } from '@angular/compiler';


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

  @Input() sidebar: SidebarComponent;

  constructor() {
   
  }

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

  showSidebar() {
    console.log(this.sidebar);
    // this.sidebar.divSidebar.classList.add('visible');
  }

}
