import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Supplier } from '../../models/supplierModel/Supplier';
import { Observable, forkJoin, throwError } from 'rxjs';
import { SupplierDto } from '../../models/supplierModel/SupplierDto';
import { map } from 'rxjs/operators';
import { ProductService } from '../productService/product.service';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {
  url: string = `${environment.baseUrl}/fournisseurs`;

  constructor(
    private http: HttpClient, 
    private productService: ProductService,
    private router: Router
    ) { }

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
        map(([supplier, listProducts]) => {
          supplier.setListProducts(listProducts);
          return supplier;
        })
      )
    ;
  }

  createSupplier(payload: Supplier): Observable<Supplier> {
    return this.http
      .post<Supplier>(this.url, payload.toDto())
      .pipe(
        catchError((error: any) => throwError(error.json())));
  }

  updateSupplier(payload: Supplier): Observable<Supplier> {
    return this.http
      .put<Supplier>(`${this.url}/${payload.id}`, payload.toDto())
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }

  removeSupplier(payload: Supplier): Observable<Supplier> {
    return this.http
      .delete<any>(`${this.url}/${payload.id}`)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }

  public navigateToAdmin() {
    this.router.navigateByUrl(`/admin/fournisseur`);
  }
}
