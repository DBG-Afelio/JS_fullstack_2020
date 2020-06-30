import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../model/employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { 
  }

  getList(): Observable<Employee[]> {
    return this.http.get<Employee[]>('http://localhost:3000/employees');
  }

  getEmployeeById(id: number): Observable<Employee> {
    return this.http.get<Employee>(`http://localhost:3000/employees/${id}`);
  }
}
