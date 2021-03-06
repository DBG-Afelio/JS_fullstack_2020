import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, throwError } from 'rxjs';
import { Product } from '../../models/productModel/Product';
import { ProductDto } from '../../models/productModel/ProductDto';
import { map, tap, mergeMap } from 'rxjs/operators';
import { Supplier } from 'src/app/models/supplierModel/Supplier';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { SupplierService } from '../supplierService/supplier.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url: string = 'http://localhost:3000/produits';

  constructor(
    private http: HttpClient,
    private router: Router,
  
  ) { }

  public getList(): Observable<Product[]> {
    return this.http.get<ProductDto[]>(this.url)
      .pipe(
        map((arrayProductDto : ProductDto[]) => {
          return arrayProductDto.map(productDto => Product.fromDto(productDto));
        }),
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

  public getProductPrice(prodId: number): number{
    let price: number = 0;
    this.getList().subscribe((list) => {
      price = list.find(prod => prod.getId() === prodId).getPrice();
    });
    return price;
  }

  public getProductOptionPrice(prodId: number, optionId: number): number {
    let price: number = 0;
    let prod: Product = null;
    this.getList().subscribe((list) => {
      prod = list.find(prod => prod.id === prodId);
      price = prod.getOptions().find(opt => opt.id === optionId).surcout;
    });
    return price;
  }

  createProduct(payload: Product): Observable<Product> {
    return this.http
      .post<Product>(this.url, payload.toDto())
      .pipe(
        catchError((error: any) => throwError(error.json())));
  }

  updateProduct(payload: Product): Observable<Product> {
    return this.http
      .put<ProductDto>(`${this.url}/${payload.id}`, payload.toDto())
      .pipe(
        map((productDto : ProductDto) => {
          return Product.fromDto(productDto);
        }),catchError((error: any) => Observable.throw(error.json())));
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
