import { Component, OnInit, Input } from '@angular/core';
import { Supplier } from 'src/app/interfaces/supplier';

@Component({
  selector: 'app-detail-supplier-comp',
  templateUrl: './detail-supplier-comp.component.html',
  styleUrls: ['./detail-supplier-comp.component.css']
})
export class DetailSupplierCompComponent implements OnInit {
  @Input() supplierDisplayed: Supplier;
  
  constructor() { }

  ngOnInit() {
  }

}
