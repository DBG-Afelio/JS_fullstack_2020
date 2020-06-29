import { Component, OnInit } from '@angular/core';
import { MOCK_OBJETS } from '../../mock-objets';

@Component({
  selector: 'app-ma-page',
  templateUrl: './ma-page.component.html',
  styleUrls: ['./ma-page.component.scss']
})
export class MaPageComponent implements OnInit {
  initialValue: number;
  mesObjets = MOCK_OBJETS;
  constructor() {
    this.initialValue = 0;
   }
  ngOnInit() {
  }

  afficheChange(value: number): void{
    this.initialValue = value;
    console.log(value);
  }

}
