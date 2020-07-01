import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';
import { EmployeService } from 'src/app/employe.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  private personId: number;
          employe;
  constructor(private activatedRoute: ActivatedRoute, private employeService:EmployeService) {
    this.activatedRoute.paramMap.subscribe((params) => 
      {
        this.personId = Number(params.get('id'))
        console.log(this.personId);
      });
    this.employeService.getEmployeById(this.personId).subscribe((employe)=>{
        this.employe=employe;
     })
   }
   
  ngOnInit(): void {
  }

}
