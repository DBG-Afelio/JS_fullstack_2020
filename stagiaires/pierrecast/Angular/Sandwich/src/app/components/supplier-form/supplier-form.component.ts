import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Supplier } from 'src/app/models/supplierModel/Supplier';
import { SupplierService } from 'src/app/services/supplierService/supplier.service';

@Component({
  selector: 'app-supplier-form',
  templateUrl: './supplier-form.component.html',
  styleUrls: ['./supplier-form.component.css']
})
export class SupplierFormComponent implements OnInit {

  @Input() supplier: Supplier;
  @Output() create = new EventEmitter<Supplier>();
  @Output() update = new EventEmitter<Supplier>();
  
  constructor(public supplierService: SupplierService) { }

  public createSupplier() {
    this.create.emit(this.supplier);
  }

  public saveChanges() {
      this.update.emit(this.supplier);
  }

  public navigateToAdmin() {
      this.supplierService.navigateToAdmin();
  }

  ngOnInit(): void {
  }
}
