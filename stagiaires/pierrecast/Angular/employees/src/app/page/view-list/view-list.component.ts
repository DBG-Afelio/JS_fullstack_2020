import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/employee';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-view-list',
  templateUrl: './view-list.component.html',
  styleUrls: ['./view-list.component.css']
})
export class ViewListComponent implements OnInit {

  list: Employee[] = [];

  constructor(
    public employeeService: EmployeeService) { 
    this.employeeService.getList().subscribe((listeRecue) => {
      this.list = listeRecue;
    });
  }

  ngOnInit(): void {
  }

}
