import { Component, OnInit, Input, HostListener } from '@angular/core';
import { Supplier } from 'src/app/models/supplierModel/Supplier';

@Component({
  selector: 'app-nav-product',
  templateUrl: './nav-product.component.html',
  styleUrls: ['./nav-product.component.css']
})
export class NavProductComponent implements OnInit {

  public index: number = 0;
  public max: number = 4;
  public min: number = 0;
  public left: number = 15;
  public size: number = 3;

  @Input() listSuppliers: Supplier[];
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.setSize(window.innerWidth);
    
  }

  constructor() { 
  }

  public previous() {
    if (this.index > this.min) {
      this.index--;
      this.left = 15 - (this.index * 215);

    }
  }

  public next() {
    this.max = (this.listSuppliers) ? this.listSuppliers.length : 4;

    if (this.index + this.size < this.max) {
      this.index++;
      this.left =  15 - (this.index * 215);

    } 
      
  }

  public setSize(windowSize: number) {
    if (windowSize >= 1550) {
      this.size = 4;
    } else if (windowSize >= 1250) {
      this.size = 3;
    } else if (windowSize >= 1000) {
      this.size = 2;
    } else {
      this.size = 1;
    }
  }

  ngOnInit(): void {
    this.setSize(window.innerWidth);

  }
}
