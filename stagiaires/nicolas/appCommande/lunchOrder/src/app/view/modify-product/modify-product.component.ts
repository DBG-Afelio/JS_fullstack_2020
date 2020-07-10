import { Component, OnInit } from '@angular/core';
import { ProvidersListService } from 'src/app/services/providers-list.service';
import { Product } from 'src/app/models/product';
import { ActivatedRoute, Router } from '@angular/router';
import { Provider } from 'src/app/models/provider';
import { OrderOption } from 'src/app/models/order-option';
import { FormGroup, FormControl,FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-modify-product',
  templateUrl: './modify-product.component.html',
  styleUrls: ['./modify-product.component.css']
})
export class ModifyProductComponent implements OnInit {

  product:Product;
  editMode:string;
  options;

  productForm=this.formBuilder.group({

    name: new FormControl(''),
    description: new FormControl(''),
    price: new FormControl(''),
    options: this.formBuilder.array([]),
    providerId: new FormControl(''),
    id: new FormControl(''),
    provider: new FormControl('')

  });

  constructor(private providersListService:ProvidersListService,
              route:ActivatedRoute,
              private router:Router,
              private formBuilder:FormBuilder) {
    route.url.subscribe(url => {
      
      this.editMode = url[1].path == 'new' ? 'create' : 'update';
    
    
    route.paramMap.subscribe( param => {

      let routeId;

      if(this.editMode === 'create'){
          routeId= param.get('providerId');
          
          this.product = new Product('','',0,[],Number(routeId),0);
          this.providersListService.getProviderById(Number(routeId)).subscribe(providerFound =>this.product.setProvider(providerFound));
          this.productForm.patchValue(this.product);
      }else{
        routeId= param.get('productId');
        this.providersListService.getProductById(Number(routeId)).subscribe(productFound=>{
        this.product=productFound;
        this.product.options.forEach(option => ( this.productForm.get('options') as FormArray).push(this.formBuilder.group({nom:[''],surcout:[''],id:['']})) )
        this.productForm.setValue(this.product);
        
        
        })
      }
   })
  });
  }

  ngOnInit(): void {
    this.options=this.getOptions();
  }
  onCreateButtonClick(){
    console.log("coucou");
    this.updateProductWithForm();
    this.providersListService.addProduct(this.product).subscribe(()=>{
      this.router.navigate([`productsList/${this.product.providerId}`]);
     })

  }
  onSaveButtonClick(){
    const confirmUpdate = confirm("Enregistrer les modifications ?")
    

    if(confirmUpdate){

      this.updateProductWithForm();
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
  getOptions() {
    return this.productForm.get('options') as FormArray;
  }
  addOption() {
    
    this.getOptions().push(
      
      this.formBuilder.group({nom:[''],surcout:[''],id:['']})

    );
  }
  deleteOption(optionIndex : number){

    this.getOptions().removeAt( optionIndex );

  }
  updateProductWithForm(){
    
    this.product = Object.assign(this.product, this.productForm.value);
    console.log(this.product);
  }

}
