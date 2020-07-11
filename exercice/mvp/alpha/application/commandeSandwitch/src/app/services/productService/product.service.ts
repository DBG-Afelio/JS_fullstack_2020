import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, throwError } from 'rxjs';
import { Product } from '../../models/productModel/Product';
import { ProductDto } from '../../models/productModel/ProductDto';
import { map } from 'rxjs/operators';
import { Supplier } from 'src/app/models/supplierModel/Supplier';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url: string = 'http://localhost:3000/produits';

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

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

  createProduct(payload: Product): Observable<Product> {
    return this.http
      .post<Product>(this.url, payload.toDto())
      .pipe(
        catchError((error: any) => throwError(error.json())));
  }

  updateProduct(payload: Product): Observable<Product> {
    return this.http
      .put<Product>(`${this.url}/${payload.id}`, payload.toDto())
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }

  removeProduct(payload: Product): Observable<Product> {
    return this.http
      .delete<any>(`${this.url}/${payload.id}`)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }

  public navigateToProductAdmin(supplierId: number) {

    console.log('route' ,`/admin/fournisseur/${supplierId}/produit`)
    this.router.navigateByUrl(`/admin/fournisseur/${supplierId}/produit`);
  }
}
