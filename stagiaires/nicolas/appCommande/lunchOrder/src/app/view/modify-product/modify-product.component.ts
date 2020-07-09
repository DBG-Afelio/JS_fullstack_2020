import { Component, OnInit } from '@angular/core';
import { ProvidersListService } from 'src/app/services/providers-list.service';
import { Product } from 'src/app/models/product';
import { ActivatedRoute, Router } from '@angular/router';
import { Provider } from 'src/app/models/provider';
import { OrderOption } from 'src/app/models/order-option';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-modify-product',
  templateUrl: './modify-product.component.html',
  styleUrls: ['./modify-product.component.css']
})
export class ModifyProductComponent implements OnInit {

  product:Product;
  editMode:string;

  productForm=new FormGroup({

    name: new FormControl(''),
    description: new FormControl(''),
    price: new FormControl(''),
    options: new FormGroup({

      nom: new FormControl(''),
      surcout: new FormControl(''),
      id: new FormControl('')

    }),
    providerId: new FormControl(''),
    id: new FormControl('')

  })

  constructor(private providersListService:ProvidersListService,route:ActivatedRoute,private router:Router) {
    route.url.subscribe(url => {
      
      this.editMode = url[1].path == 'new' ? 'create' : 'update';
    }
    );
    
    route.paramMap.subscribe( param => {

      const routeId = param.get('productId');

      if(routeId === 'new'){

        let providerId:number;
        this.providersListService.getProductById(Number(routeId)).subscribe(productFound=>{

          providerId=productFound.providerId;
          this.product = new Product('','',0,[],providerId,0);
          this.productForm.setValue(this.product);

        })
        

      }else{

        this.providersListService.getProductById(Number(routeId)).subscribe(productFound=>{
        this.product=productFound;
        this.productForm.setValue(this.product);
        
        })
      }
   })
  }

  ngOnInit(): void {
  }
  onSaveButtonClick(){
    const confirmUpdate = confirm("Enregistrer les modifications ?")

    if(confirmUpdate){
      this.product=this.productForm.value;
      this.providersListService.updateProduct(this.product).subscribe();
      this.router.navigate([`productsList/${this.product.providerId}`]);

    }
  }
  onDeleteProductClick(){

    const confirmDelete = confirm("supprimer l'utilisateur ?")

    if(confirmDelete){

      this.providersListService.removeProduct(this.product.id).subscribe()
      this.router.navigate(['/productList/'+ this.product.providerId]);

    }
    
  }

}
