import { Component, OnInit } from '@angular/core';
import { SuppliersService } from '../../services//suppliers.service';
import { Supplier } from '../../interfaces/supplier';

@Component({
  selector: 'app-list-suppliers',
  templateUrl: './list-suppliers.component.html',
  styleUrls: ['./list-suppliers.component.css']
})
export class ListSuppliersComponent implements OnInit {

  private listSuppliers: Supplier[];

  constructor(
    public suppliersService: SuppliersService
  ) {
    this.suppliersService.getListSuppliers().subscribe((listeRecue) => {
      this.listSuppliers = listeRecue;
      console.log(this.listSuppliers);
    });

   }

  ngOnInit() {
  }

  getListSuppliers(){
    return this.listSuppliers;
  }

}
