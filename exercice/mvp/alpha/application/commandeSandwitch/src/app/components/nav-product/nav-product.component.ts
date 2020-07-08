import { Component, OnInit, Input } from '@angular/core';
import { Supplier } from 'src/app/models/supplierModel/Supplier';

@Component({
  selector: 'app-nav-product',
  templateUrl: './nav-product.component.html',
  styleUrls: ['./nav-product.component.css']
})
export class NavProductComponent implements OnInit {

  @Input() listSuppliers: Supplier[];
  
  constructor() { }

  ngOnInit(): void {
  }
}
