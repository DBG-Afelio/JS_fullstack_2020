import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from 'src/app/interfaces/item';
import { DisplayItemComponent } from '../display-item/display-item.component'

@Component({
  selector: 'app-modify-item',
  templateUrl: './modify-item.component.html',
  styleUrls: ['./modify-item.component.css']
})
export class ModifyItemComponent implements OnInit {
  @Input() item: Item;
  @Output() update = new EventEmitter<Item>();
  @Output() visible: boolean;

  public unique_key: number;
  public parentRef: DisplayItemComponent;

  constructor() { }

  ngOnInit() {

  }
  showTheItem(){
    console.log(this.item);
  }

  updateItemEvent(){

    if(this.item.nom == ""){
        console.log("Problème");
    }
    else{
        this.update.emit(this.item);
    }
  }    
  closeModifyPannel(){
    console.log(this.unique_key)
    this.visible = false;
  }  

}
