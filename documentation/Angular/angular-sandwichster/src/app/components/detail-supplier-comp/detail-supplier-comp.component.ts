import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";

import { Supplier } from 'src/app/interfaces/supplier';

@Component({
  selector: 'app-detail-supplier-comp',
  templateUrl: './detail-supplier-comp.component.html',
  styleUrls: ['./detail-supplier-comp.component.css']
})
export class DetailSupplierCompComponent implements OnInit {
  @Input() supplierDisplayed: Supplier;
  @Output() update = new EventEmitter<Supplier>();

  constructor() { }

  ngOnInit() {

  }

  functionVerifie(test){
    console.log(test.value);
  }

  updateSupplierEvent(){

    this.update.emit(this.supplierDisplayed);

} 

}
