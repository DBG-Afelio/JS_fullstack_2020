import { Component, OnInit } from '@angular/core';
import { Supplier } from 'src/app/models/supplierModel/Supplier';
import { SupplierService } from 'src/app/services/supplierService/supplier.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-supplier-form-page',
  templateUrl: './supplier-form-page.component.html',
  styleUrls: ['./supplier-form-page.component.css']
})
export class SupplierFormPageComponent implements OnInit {
  private supplierId: number;  
  public supplier: Supplier; 

  constructor(
    private supplierService: SupplierService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { 
    this.activatedRoute.paramMap.subscribe((params) => {
      this.supplierId = Number(params.get('id'));
      if (this.supplierId !== 0 ) {
        this.supplierService.getSupplierById(this.supplierId).subscribe((supplier: Supplier) => {
          this.supplier = supplier;
        });
      } else {
        this.supplier = new Supplier( 0, '',  '', true, false ,[false, false, false, false, false, false, false],'') ;
      }
    }); 
  }

  public createSupplier(supplier: Supplier) {
    this.supplierService.createSupplier(supplier).subscribe(() => {
      this.navigateToAdmin(supplier);
    });
  }

  public updateSupplier(supplier: Supplier) {
    this.supplierService.updateSupplier(supplier).subscribe(() => {
      this.navigateToAdmin(supplier);
    });
  }

  /*public removeSupplier(supplier: Supplier) {
    this.supplierService.removeSupplier(supplier).subscribe(() => {
      this.navigateToAdmin(supplier);
    });
  }*/
  
  public navigateToAdmin(supplier: Supplier) {
    console.log('navigateToAdmin')
    this.router.navigateByUrl(`/admin/fournisseur`);
  }

  ngOnInit(): void {
  }
}
