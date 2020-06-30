import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEmployee } from '../model/iEmployee';
@Injectable({
  providedIn: 'root'
})
export class EmployesService {

  constructor(private http: HttpClient) { }

  getList(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>('http://localhost:3001/employees');
  }
  getEmployeeById(id: number): Observable<IEmployee> {
  return this.http.get<IEmployee>(`http://localhost:3001/employees/${id}`);
  }
  
}
