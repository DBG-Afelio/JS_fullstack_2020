import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FournService } from 'src/service/fourn.service';
import { Fourn } from 'src/model/fourn';
import { Product } from 'src/model/product';
import { ProductService } from 'src/service/product.service';

@Component({
  selector: 'app-fournisseur',
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.css']
})
export class FournisseurComponent implements OnInit {
  fourn_id: number;
  fournisseur: Fourn;
  selectedProduct :Product ;
  

  constructor(private fournService: FournService, private activatedRoute: ActivatedRoute , private productService : ProductService) {
    this.activatedRoute.paramMap.subscribe(param => {
      this.fourn_id = Number(param.get('id'));
    })
  }

  ngOnInit() {
    this.fournService.getFournByIdWithProducts(this.fourn_id)
      .subscribe((fourn:Fourn) => this.fournisseur = fourn);
      
      
  }
  
  select(product : Product){
    this.selectedProduct = product ;
    
  }


}
