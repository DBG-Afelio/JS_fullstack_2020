import { Component, OnInit, Input } from '@angular/core';
import { Basket } from  'src/app/model/basket';
@Component({
  selector: 'app-resume-panier',
  templateUrl: './resume-panier.component.html',
  styleUrls: ['./resume-panier.component.css']
})
export class ResumePanierComponent implements OnInit {
  @Input() totalPrice:number;
  @Input() totalQt:number;
  constructor() { }

  ngOnInit(): void {
  }

}
