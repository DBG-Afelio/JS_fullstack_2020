import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/employee';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-view-manager',
  templateUrl: './view-manager.component.html',
  styleUrls: ['./view-manager.component.css']
})
export class ViewManagerComponent implements OnInit {

  list: Employee[] = [];

  constructor(
    public employeeService: EmployeeService) { 
    this.employeeService.getList().subscribe((listeRecue) => {
      ;
      this.list = listeRecue.filter(employee => employee.manager);
    });
  }

  ngOnInit(): void {
  }

}
