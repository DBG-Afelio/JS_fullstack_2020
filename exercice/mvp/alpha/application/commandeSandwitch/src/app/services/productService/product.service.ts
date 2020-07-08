import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../../models/productModel/Product';
import { ProductDto } from '../../models/productModel/ProductDto';
import { map } from 'rxjs/operators';
import { Supplier } from 'src/app/models/supplierModel/Supplier';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url: string = 'http://localhost:3000/produits';

  constructor(private http: HttpClient) { }

  public getList(): Observable<Product[]> {
    return this.http.get<ProductDto[]>(this.url)
      .pipe(
        map((arrayProductDto : ProductDto[]) => {
          return arrayProductDto.map(productDto => Product.fromDto(productDto));
        })
      )
    ;
  }

  public getProductById(id: number): Observable<Product> {
    return this.http.get<ProductDto>(this.url + '/' +id)
      .pipe(
        map(productDto => Product.fromDto(productDto)),
      )
    ;
  }

  public getProductsFromSupplier(id: number): Observable<Product[]> {

    return this.http.get<ProductDto[]>(this.url +`?fourn_id=${id}`)
      .pipe(
        map((arrayProductDto : ProductDto[]) => {
          return arrayProductDto
            .map(productDto => Product.fromDto(productDto));
        })
      )
    ;
  }
}
