import { Injectable } from '@angular/core';
import { Provider } from '../models/provider';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProvidersListService {

  constructor() { }

//getProviders

  getProvidersList():Provider[] | null{

    return null

  }
  getProviderById(providerId:number):Provider | null{

    return null

  }

//modifyProviders

  addProvider(newProvider:Provider){



  }
  removeProvider(providerId:number){

    

  }
  updateProvider(updatedProvider:Provider){

    

  }

//getProducts

  getProductsByProviderId(providerId:number):Product[] | null{

    return null

  }
  getProductById(productId:number):Product | null {

    return null

  }

//modifyProducts

  addProduct(newProduct:Product){



  }
  removeProduct(productId:number){

    

  }
  updateProduct(updatedProduct:Product){

    

  }

}
