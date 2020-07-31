import { Component, OnInit } from '@angular/core';
import { Supplier } from 'src/app/models/supplierModel/Supplier';
import { SupplierService } from 'src/app/services/supplierService/supplier.service';

@Component({
  selector: 'app-supplier-admin-page',
  templateUrl: './supplier-admin-page.component.html',
  styleUrls: ['./supplier-admin-page.component.css']
})
export class SupplierAdminPageComponent implements OnInit {

  public listSuppliers: Supplier[];

  public page: number;
  public pageSize: number;
  public collectionSize: number;

  constructor(public supplierService: SupplierService) { 
    this.reloadSupplierList();
  }

  public reloadSupplierList(): void{
    this.supplierService.getList().subscribe((suppliers) => {
      this.listSuppliers = suppliers;
      this.collectionSize = this.listSuppliers.length;
    });

    this.page = 1;
    this.pageSize = 10;
  }
  
  public archieveSupplier(supplier: Supplier) {
    supplier.archieved = (supplier.archieved) ? false : true;
    this.supplierService.updateSupplier(supplier).subscribe(() => {
      this.supplierService.navigateToAdmin();
      
    });
    this.reloadSupplierList();
  }
  
  public removeSupplier(supplier: Supplier) {
    if (confirm('Etes-vous sur de vouloir supprimer ce fournisseur ?')) {
      this.supplierService.removeSupplier(supplier).subscribe(() => {
        this.supplierService.navigateToAdmin();
      });
      this.reloadSupplierList();
    }
  }

  public sortBy(prop: string) {
    return this.listSuppliers?.sort((a, b) => a[prop] > b[prop] ? 1 : a[prop] === b[prop] ? 0 : -1);
  }

  ngOnInit(): void {
  }
}
