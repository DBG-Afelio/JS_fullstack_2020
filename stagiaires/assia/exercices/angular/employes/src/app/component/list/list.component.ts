import { Component, OnInit } from '@angular/core';
import { IEmployee } from 'src/app/model/iEmployee';
import { EmployesService } from 'src/app/service/employes.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  listEmployes: IEmployee[] = [];

  constructor(private serviceEmp: EmployesService) { 
    this.serviceEmp.getList().subscribe(listRecue => this.listEmployes = listRecue);
   }

  ngOnInit(): void {
  }

}
