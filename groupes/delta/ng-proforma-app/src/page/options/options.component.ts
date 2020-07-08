import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/model/product';
import { Option } from 'src/model/option';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {
  @Input() options : Option[];
  @Input() selected_options : Option[];
  constructor() { 
    
  }

  ngOnInit() {
    
  }
  
}
