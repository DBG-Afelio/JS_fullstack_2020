import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Supplier } from '../../models/supplierModel/Supplier';
import { Observable, forkJoin } from 'rxjs';
import { SupplierDto } from '../../models/supplierModel/SupplierDto';
import { map, tap } from 'rxjs/operators';
import { ProductService } from '../productService/product.service';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {
  url: string = 'http://localhost:3000/fournisseurs';

  constructor(private http: HttpClient, private productService: ProductService) { }

  public getList(): Observable<Supplier[]> {
    return this.http.get<SupplierDto[]>(this.url)
      .pipe(
        map((arraySupplierDto : SupplierDto[]) => {
          return arraySupplierDto.map(supplierDto => Supplier.fromDto(supplierDto));
        })
      )
    ;
  }

  public getSupplierById(id: number): Observable<Supplier> {
    return this.http.get<SupplierDto>(this.url + '/' +id)
      .pipe(
        map(supplierDto => Supplier.fromDto(supplierDto)),
      )
    ;
  }

  public getSupplierWithProductsById(id: number) : Observable<Supplier>{
    return forkJoin(this.getSupplierById(id), this.productService.getProductsFromSupplier(id))
      .pipe(
        tap((result) => console.log(result)),
        map(([supplier, listProducts]) => {
          supplier.setListProducts(listProducts);
          return supplier;
        })
      )
    ;
  }
}
