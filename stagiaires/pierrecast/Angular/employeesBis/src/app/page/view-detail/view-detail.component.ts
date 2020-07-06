import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/service/employee.service';
import { Employee } from 'src/app/model/employee';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-detail',
  templateUrl: './view-detail.component.html',
  styleUrls: ['./view-detail.component.css']
})
export class ViewDetailComponent implements OnInit {

  private employeeId: number;
  public employee: Employee;

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: EmployeeService
    ) { 
       
    this.activatedRoute.paramMap.subscribe((params) => {
        this.employeeId = Number(params.get('id'));
        this.service.getEmployeeById(this.employeeId).subscribe((employee: Employee) => {
          this.employee = employee;
        });
    });
  }

  public getAge(date: Date) : number {
    if (date) {
      let today = new Date();
      let ageTime = today.getTime() - date.getTime();
      return Math.floor(ageTime / 1000 / 60 / 60 / 24 / 365);
    }
    return 0;
  } 

  ngOnInit(): void {

  }

}
