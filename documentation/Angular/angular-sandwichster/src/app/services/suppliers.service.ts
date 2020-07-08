import { Injectable } from '@angular/core';
import { Observable, throwError, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import{ Supplier } from '../interfaces/supplier';
import { SupplierDto } from '../interfaces/supplierDto'

@Injectable({
  providedIn: 'root'
})
export class SuppliersService {

  private urlAPI: string = "http://localhost:3000/";

constructor(private http: HttpClient) { }

  getListSuppliers(): Observable<Supplier[]> {

    return this.http.get<Supplier[]>(this.urlAPI + 'fournisseurs')
    .pipe(map((arraySuppliersDto: SupplierDto []) => {
      return arraySuppliersDto.map(supplierDto => Supplier.fromDto(supplierDto))
    }
    ));
  }

  getSuppliersById(id: number): Observable<Supplier> {
    return this.http.get<Supplier>(this.urlAPI + `fournisseurs/${id}`)
    .pipe(map( (supplierDto: SupplierDto) => {
      return Supplier.fromDto(supplierDto)
    }));
  }

}
