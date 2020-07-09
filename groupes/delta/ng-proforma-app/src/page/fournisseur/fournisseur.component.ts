import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FournService } from 'src/service/fourn.service';
import { Fourn } from 'src/model/fourn';
import { Product } from 'src/model/product';
import { ProductService } from 'src/service/product.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { interval } from 'rxjs';

@Component({
  selector: 'app-fournisseur',
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.css']
})
export class FournisseurComponent implements OnInit {
  DEADLINE = {HOURS:10, MINUTES: 0};
  fourn_id: number;
  fournisseur: Fourn;
  selectedProduct: Product;
  hour: Date;
  message: string;
 



  constructor(private fournService: FournService, private activatedRoute: ActivatedRoute, private productService: ProductService) {
    this.activatedRoute.paramMap.subscribe(param => {
      this.fourn_id = Number(param.get('id'));
    })

  }

  ngOnInit() {
    this.hour= new Date();
    interval(6000).subscribe(() => this.hour =  new Date(Date.now()));

    this.fournService.getFournByIdWithProducts(this.fourn_id)
      .subscribe((fourn: Fourn) => this.fournisseur = fourn);
      
      console.log(this.hour.getHours());


  }

  select(product: Product) {
    this.selectedProduct = product;

  }

  checkeOrder() {
    
    console.log(this.hour.getMinutes());
    if ( this.fournisseur.openToday()) {
      this.message = 'You can order any thing you like ';
    }
    
    else if (this.fournisseur.openToday()===false) {
      this.message = "Désolées les commandes ne sont pas disponibles le week-end" ; 
    }

  }
 

  stillInTime(){
    return this.hour.getHours() < this.DEADLINE.HOURS ;
  }
  
}
