import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeService } from '../../employe.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
    tabEmploye=[]

  constructor(private activatedRoute: ActivatedRoute, private employeService:EmployeService) {
    this.employeService.getList().subscribe((tabEmploye)=>{
      this.tabEmploye=tabEmploye;
      console.log('subscribe');
    })
    console.log('constructor')

   }

  ngOnInit(): void {
  }

}
