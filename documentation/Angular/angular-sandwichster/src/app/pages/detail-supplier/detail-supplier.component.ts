import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SuppliersService } from '../../services/suppliers.service';
import { Supplier } from '../../interfaces/supplier';

@Component({
  selector: 'app-detail-supplier',
  templateUrl: './detail-supplier.component.html',
  styleUrls: ['./detail-supplier.component.css']
})

export class DetailSupplierComponent implements OnInit {

  public idSupplier: number;
  public supplierDisplayed: Supplier;
  public supplierUpdated: Supplier;

  constructor(
    private activatedRoute: ActivatedRoute, 
    private suppliersService: SuppliersService, 
    private routeur: Router
  ) { 

    this.activatedRoute.paramMap.subscribe((params) => {
      this.idSupplier = Number(params.get('id'));
    
      if(this.idSupplier===0){
        
      
        this.supplierDisplayed = new Supplier(
          0,
          "",
          "",
          true,
          false,
          [true, true, true, true, true, true, true],
          ""
        )
      }

      else{
        this.suppliersService.getSuppliersById(this.idSupplier).subscribe((element) => {
          this.supplierDisplayed = element
        });
      }
    
    
    });
  }

  ngOnInit() {
  }

  createEvent(supplier: Supplier){
    this.suppliersService.createSupplier(supplier).subscribe(()=>
    this.routeur.navigate(["list-suppliers"]) 
    );
  }
  updateEvent(supplier: Supplier){
    this.suppliersService.updateSupplier(supplier).subscribe(()=>
    this.routeur.navigate(["list-suppliers"])
  );
  }
  removeEvent(supplier: Supplier){
    this.suppliersService.removeSupplier(supplier).subscribe(()=>
      this.routeur.navigate(["list-suppliers"])
    );
  }

}
