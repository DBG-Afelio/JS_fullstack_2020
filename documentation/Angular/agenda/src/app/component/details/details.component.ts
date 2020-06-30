import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  private personId: number;

  constructor(private activatedRoute: ActivatedRoute) { 
    this.activatedRoute.paramMap.subscribe((params) => 
      {
        this.personId = Number(params.get('personId'))
        console.log(this.personId);
      });
    console.log('2', this.activatedRoute.snapshot.paramMap.get('personId'));
  }

  ngOnInit() {
  }

}
