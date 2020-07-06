import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../model/employee';
import { Observable } from 'rxjs';
import { EmployeeDto } from '../model/EmployeeDto';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  url: string = 'http://localhost:3000/employees';

  constructor(private http: HttpClient) { 
  }

  public getList(): Observable<Employee[]> {
    return this.http.get<EmployeeDto[]>(this.url)
      .pipe(
        map((arrayEmployeeDto : EmployeeDto[]) => {
          return arrayEmployeeDto.map(employeeDto => Employee.fromDto(employeeDto));
        })
      )
    ;
  }

  public getEmployeeById(id: number): Observable<Employee> {
    return this.http.get<EmployeeDto>(this.url + '/' +id)
      .pipe(
        map(employeeDto => Employee.fromDto(employeeDto)),
      )
    ;
  }
}
