import { Component, OnInit, Input } from '@angular/core';
import { EmployeeService } from 'src/app/service/employee.service';
import { Employee } from 'src/app/model/employee';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
 

 

  ngOnInit(): void {
  }

}
