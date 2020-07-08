import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/model/product';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {
@Input() options : {
  nom:string;
  surcout:number;
  id:number
}[];
  constructor() { 
    
  }

  ngOnInit() {
    
  }
  
}
