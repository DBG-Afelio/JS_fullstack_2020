import { Component, OnInit } from '@angular/core';
import { IEmployee } from 'src/app/model/iEmployee';
import { EmployesService } from 'src/app/service/employes.service';

@Component({
  selector: 'app-managers',
  templateUrl: './managers.component.html',
  styleUrls: ['./managers.component.css']
})
export class ManagersComponent implements OnInit {
  
  public listManagers: IEmployee[] = [];
  
  constructor(private serviceEmp: EmployesService) {
    this.serviceEmp.getList().subscribe(listeRecue => {
      this.listManagers = listeRecue.filter(empIsManager => empIsManager.manager)
    });
  }

  ngOnInit(): void {
  }
  
}
