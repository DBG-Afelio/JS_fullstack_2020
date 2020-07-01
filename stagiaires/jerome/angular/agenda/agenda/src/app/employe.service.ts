import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {
    tabEmploye=[];
  constructor(private http: HttpClient) {
   }
   getList(){
     return this.http.get<any[]>('http://localhost:3000/employees')
   }
   getEmployeById(id:number){
     return this.http.get<Object>(`http://localhost:3000/employees/${id}`)
   }
}
