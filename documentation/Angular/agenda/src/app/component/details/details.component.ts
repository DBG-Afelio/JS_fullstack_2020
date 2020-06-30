import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  private personId: number;

  constructor(private activatedRoute: ActivatedRoute) { 
    // console.log('activated route', this.activatedRoute);
    // console.log('id de la route', this.activatedRoute.snapshot.params.id);
    
    this.activatedRoute.paramMap.subscribe((params) => {
        console.log('parammap has changed values', params)
    });
    console.log('id de la route', this.activatedRoute.snapshot.params.id);
  }

  ngOnInit() {
   
  }

}
