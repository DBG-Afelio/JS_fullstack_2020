import { Component, OnInit } from '@angular/core';
import { IEmployee } from 'src/app/model/iEmployee';
import { EmployesService } from 'src/app/service/employes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  private employee: IEmployee;
  private id: number;
  private nom: string;
  private prenom: string;
  private isManager: boolean;

  constructor(private serviceEmp: EmployesService, private routeActiv: ActivatedRoute) { 
    this.routeActiv.paramMap.subscribe((params) => {
      this.id = Number(params.get('id'));
      this.serviceEmp.getEmployeeById(this.id).subscribe((emp: IEmployee) => {
        this.employee = emp;
        this.nom = this.employee.nom;
        this.prenom = this.employee.prenom;
        this, this.isManager = this.employee.manager;
      })

    })
  }

  ngOnInit(): void {
  }
  getEmployee(): IEmployee{
    return this.employee;
  }
  getEmployeeId(): number {
    return this.id;
  }
  getEmployeeNom(): string {
    return this.nom;
  }
  getEmployeePrenom(): string {
    return this.prenom;
  }
  isEmployeeManager(): boolean {
    return this.isManager;
  }
}
