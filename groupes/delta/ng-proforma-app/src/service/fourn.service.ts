import { Injectable } from '@angular/core';
import { Observable, merge } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FournDto } from 'src/model/fournDto';
import { map, mergeMap } from 'rxjs/operators';
import { Fourn } from 'src/model/fourn';
import { ProductService } from './product.service';
import { Product } from 'src/model/product';

@Injectable({
  providedIn: 'root'
})
export class FournService {

  constructor(private http : HttpClient, private productService: ProductService) { }



  getFournList():Observable<Fourn[]> {
    return this.http.get<FournDto[]>('http://localhost:3000/fournisseurs').pipe(
      map((fourns:FournDto[]) => {
        return fourns.map((fourn : FournDto)=>Fourn.fromDto(fourn));
      })
    )
  }
  getFournById(id : number):Observable <Fourn>{
    return this.http.get<FournDto>(`http://localhost:3000/fournisseurs/${id}`).pipe(
      map((fourn : FournDto)=>{
        return Fourn.fromDto(fourn);
      })
    )
  }

  getFournByIdWithProducts(id: number): Observable<Fourn> {
    return this.getFournById(id).pipe(
      mergeMap((fourn:Fourn) => {
        return this.productService.getProductsByFournId(id).pipe(
          map((products:Product[]) => {
            return fourn.setProducts(products)
          })
        )
      })
    )
  }



}


