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
        /*
        this.supplierDisplayed = {
          id: 0,
          nom: "",
          description: "",
          ferme: true,
          archive: false,
          horaire: [],
          tel: "",
        }*/
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
    this.routeur.navigate(["/"]) 
    );
  }
  updateEvent(supplier: Supplier){
    this.suppliersService.updateSupplier(supplier).subscribe(()=>
    this.routeur.navigate(["/"])
  );
  }
  removeEvent(supplier: Supplier){
    this.suppliersService.removeSupplier(supplier).subscribe(()=>
      this.routeur.navigate(["/"]) // quand il  va récupérer la réponse, il retourne page d'accueil
    );
  }

}
