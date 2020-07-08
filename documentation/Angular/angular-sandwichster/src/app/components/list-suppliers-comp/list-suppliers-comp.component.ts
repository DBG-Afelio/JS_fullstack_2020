import { Component, OnInit, Input } from '@angular/core';
import { SuppliersService } from 'src/app/services/suppliers.service';
import { Supplier } from 'src/app/interfaces/supplier';

@Component({
  selector: 'app-list-suppliers-comp',
  templateUrl: './list-suppliers-comp.component.html',
  styleUrls: ['./list-suppliers-comp.component.css']
})
export class ListSuppliersCompComponent implements OnInit {

  @Input() listSuppliers: Supplier[];

  modalVisible = false;
  idForModal: number;
  supplierToDisplay: Supplier;

  constructor() { }

  ngOnInit() {

  }

}
