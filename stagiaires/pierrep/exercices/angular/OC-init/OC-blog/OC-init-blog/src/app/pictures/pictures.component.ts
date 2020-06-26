import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.css']
})
export class PicturesComponent implements OnInit {

  @Input() coucouVar: "";
  
  @Input() test_limage: any;

  testVar = "coucoucoucoucoucocu";

  

  constructor() { }

  ngOnInit(): void {
  }

}
