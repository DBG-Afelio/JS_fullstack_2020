import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from 'src/app/interfaces/item';
import { DisplayItemComponent } from '../display-item/display-item.component'

@Component({
  selector: 'app-modify-item',
  templateUrl: './modify-item.component.html',
  styleUrls: ['./modify-item.component.css']
})

// BENOIT
export class ModifyItemComponent implements OnInit {
  @Input() item: Item;
  @Output() update = new EventEmitter<Item>();
  @Output() visible = new EventEmitter<boolean>();
  @Output() delete = new EventEmitter<Item>();

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
    this.visible.emit(false);
  }  
  addOption(optionName, optionPrice){
    this.item.addOption(optionName.value, optionPrice.value);
    optionName.value = "";
    optionPrice.value = "";
  }

  deleteProduct(){
    if(window.confirm("Etes-vous sûr(e) de vouloir supprimer ce produit?")){
      console.log("Produit supprimé");
      this.delete.emit(this.item);
    }

  }

}
