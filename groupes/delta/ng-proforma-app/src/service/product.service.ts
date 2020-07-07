import { Injectable } from '@angular/core';
import { FournService } from './fourn.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, mergeMap } from "rxjs/operators";
import { ProductDto } from 'src/model/productDto';
import { Product } from 'src/model/product';
import { Fourn } from 'src/model/fourn';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  // getProducts():Observable<Product[]> {
  //   return this.http.get<ProductDto[]>('http://localhost:3000/produits').pipe(
  //     map((products:ProductDto[]) => {
  //       return products.map((product:ProductDto) => Product.fromDto(product))
  //     }),
  //     mergeMap((products:Product[]) =>{
  //       return this.fournService.getFournList().pipe(
  //         map((fourns:Fourn[]) => {
  //           return products.map((product:Product) => product.setFournisseur(fourns.find(fourn => fourn.id === product.fourn_id)))
  //         })
  //       )
  //     })
  //   )
  // }

  getProductsByFournId(id:number):Observable<Product[]> {
    return this.http.get<ProductDto[]>(`http://localhost:3000/produits?fourn_id=${id}`).pipe(
      map((productsDto:ProductDto[]) => {
        return productsDto.map((productDto:ProductDto) => Product.fromDto(productDto));
      })
    )
  }

}
