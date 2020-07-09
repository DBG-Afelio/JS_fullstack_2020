import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

import { Supplier } from 'src/app/interfaces/supplier';

@Component({
  selector: 'app-detail-supplier-comp',
  templateUrl: './detail-supplier-comp.component.html',
  styleUrls: ['./detail-supplier-comp.component.css']
})
export class DetailSupplierCompComponent implements OnInit {
  @Input() supplierDisplayed: Supplier;

  @Output() create = new EventEmitter<Supplier>();
  @Output() update = new EventEmitter<Supplier>();
  @Output() remove = new EventEmitter<Supplier>();

  constructor() { }

  ngOnInit() {

  }

  functionVerifie(test){
    console.log(test.value);
  }

  createSupplierEvent(){

    if(this.supplierDisplayed.nom ==="" || this.supplierDisplayed.tel === ""){
      console.log("Données manquantes")
    } 
    else{
      this.create.emit(this.supplierDisplayed);
    }
  }

  updateSupplierEvent(){
    if(this.supplierDisplayed.nom ==="" || this.supplierDisplayed.tel === ""){
      console.log("Données manquantes")
    } 
    else{
      this.update.emit(this.supplierDisplayed);
    }
  }
  eraseSupplierEvent(){
    let answer =  confirm("Etes-vous sûr de vouloir supprimer ce fournisseur?/n Cette procédure est irréversible");
    if(answer ===true){
      console.log("true");
      this.remove.emit(this.supplierDisplayed);
    }
  }
}
