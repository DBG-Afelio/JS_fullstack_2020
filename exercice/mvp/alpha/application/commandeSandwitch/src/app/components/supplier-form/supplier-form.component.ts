import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Supplier } from 'src/app/models/supplierModel/Supplier';

@Component({
  selector: 'app-supplier-form',
  templateUrl: './supplier-form.component.html',
  styleUrls: ['./supplier-form.component.css']
})
export class SupplierFormComponent implements OnInit {

  @Input() supplier: Supplier;
  @Output() create = new EventEmitter<Supplier>();
  @Output() update = new EventEmitter<Supplier>();
  //@Output() remove = new EventEmitter<Supplier>();
  
  constructor() { }

  public createSupplier() {
    this.create.emit(this.supplier);
  }

  public saveChanges() {
      this.update.emit(this.supplier);
  }

  /*public deleteSupplier() {
      if (this.supplier.id !== 0 && window.confirm('Etes-vous sûr de vouloir supprimer ce fournisseur ?')) {
          this.remove.emit(this.supplier);
      }
  }*/

  ngOnInit(): void {
  }
}
