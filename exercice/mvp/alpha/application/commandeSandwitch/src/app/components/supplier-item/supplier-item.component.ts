import { Component, OnInit, Input } from '@angular/core';
import { Supplier } from 'src/app/models/supplierModel/Supplier';

@Component({
  selector: 'app-supplier-item',
  templateUrl: './supplier-item.component.html',
  styleUrls: ['./supplier-item.component.css']
})
export class SupplierItemComponent implements OnInit {
  @Input() supplier: Supplier

  constructor() { }

  ngOnInit(): void {
  }

  public isOpened(supplier: Supplier) : boolean {
    if (!supplier.closure) {
      let today = new Date().getDay();
      if (supplier.openings[today]) {
        return true;
      }
    }
    return false;
  }

}
