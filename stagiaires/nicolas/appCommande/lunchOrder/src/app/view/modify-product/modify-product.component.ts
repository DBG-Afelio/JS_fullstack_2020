import { Component, OnInit } from '@angular/core';
import { ProvidersListService } from 'src/app/services/providers-list.service';
import { Product } from 'src/app/models/product';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modify-product',
  templateUrl: './modify-product.component.html',
  styleUrls: ['./modify-product.component.css']
})
export class ModifyProductComponent implements OnInit {
  product:Product;

  constructor(private providersListService:ProvidersListService,route:ActivatedRoute,private router:Router) {
    route.paramMap.subscribe( param => {

      const routeId = param.get('productId');
      this.providersListService.getProductById(Number(routeId)).subscribe(productFound=>{
        this.product=productFound;
        
      })
    })

   }

  ngOnInit(): void {
  }
  onSaveButtonClick(){
    this.providersListService.updateProduct(this.product).subscribe();
    this.router.navigate([`productsList/${this.product.providerId}`]);
  }
  updateNameProduct(newName:string){
      this.product.name=newName;
  }
  updateDescriptionProduct(newDescription:string){
    this.product.name=newDescription;
  }
  updatePriceProduct(newPrice:number){
    this.product.price=newPrice;
  }

}
