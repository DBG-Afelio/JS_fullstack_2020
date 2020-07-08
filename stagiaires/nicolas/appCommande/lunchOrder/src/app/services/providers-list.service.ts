import { Injectable } from '@angular/core';
import { Provider } from '../models/provider';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { ProviderDto } from '../models/provider-dto';
import { ProductDto } from '../models/product-dto';

@Injectable({
  providedIn: 'root'
})
export class ProvidersListService {

  constructor(private http:HttpClient) { }

//getProviders

  getProvidersList():Observable<Provider[]>{

    return this.http.get<ProviderDto[]>('http://localhost:3000/fournisseurs')
    .pipe(
      map((arrayProviderDto:ProviderDto[]) => {
        return arrayProviderDto.map((providerDto:ProviderDto) => Provider.fromDto(providerDto)) 
      })
    )

  }
  getProviderById(providerId:number):Observable<Provider>{

    return this.http.get<ProviderDto>(`http://localhost:3000/fournisseurs/${providerId}`)
    .pipe(
      map((providerDto:ProviderDto) => {
        return Provider.fromDto(providerDto) 
      })
    )

  }

//modifyProviders

  addProvider(newProvider:Provider){

    this.http.post<Provider>('http://localhost:3000/fournisseurs',newProvider.toDto())

  }
  removeProvider(providerId:number){

    this.http.delete<ProviderDto>(`http://localhost:3000/commandes/${providerId}`)

  }
  updateProvider(updatedProvider:Provider){

    this.removeProvider(updatedProvider.id)
    this.addProvider(updatedProvider)

  }

//getProducts

  
getProductsList():Observable<Product[]>{

  return this.http.get<ProductDto[]>('http://localhost:3000/produits')
    .pipe(
      map((arrayProductsDto:ProductDto[]) => {
        return arrayProductsDto.map((productDto:ProductDto) => Product.fromDto(productDto)) 
      })
    )
  }

  getProductsByProviderId(providerId:number):Observable<Product[]>{

    const productObservable = this.http.get<ProductDto[]>(`http://localhost:3000/produits?fourn_id=${providerId}`)
    .pipe(
      map(productArray => productArray.map(Product.fromDto))

    );

    return forkJoin(productObservable,this.getProviderById(providerId))
    .pipe(
      map(([produits,fournisseur]) =>{ 
        produits.forEach(produit => produit.setProvider(fournisseur))
        return produits
        }
      )
    )
  }
  getProductById(productId:number):Observable<Product>{

    return this.http.get<ProductDto>(`http://localhost:3000/produits/${productId}`)
    .pipe(
      map(Product.fromDto),
      mergeMap(produit => this.getProviderById(produit.providerId)
        .pipe(
            map(provider => {

              produit.setProvider(provider);
              return produit
              
            })
        )
      )
    )

  }

//modifyProducts

  addProduct(newProduct:Product){

    this.http.post<Product>('http://localhost:3000/produits',newProduct.toDto())

  }
  removeProduct(productId:number){

    this.http.delete<ProductDto>(`http://localhost:3000/produits/${productId}`)

  }
  updateProduct(updatedProduct:Product){

    this.removeProduct(updatedProduct.id)
    this.addProduct(updatedProduct)

  }

}
