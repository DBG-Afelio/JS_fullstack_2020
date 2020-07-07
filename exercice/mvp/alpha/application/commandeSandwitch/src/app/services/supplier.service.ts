import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Supplier } from '../models/Supplier';
import { Observable } from 'rxjs';
import { SupplierDto } from '../models/SupplierDto';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {
  url: string = 'http://localhost:3000/fournisseurs';

  constructor(private http: HttpClient) { }

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
}
