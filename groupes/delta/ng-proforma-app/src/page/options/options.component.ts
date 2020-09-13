import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/model/product';
import { Option } from 'src/model/option';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {
  @Input() read_only: boolean;
  @Input() options : Option[];
  @Input() selected_options : Option[];
  @Output() options_change: EventEmitter<Option[]> = new EventEmitter<Option[]>();
  constructor() { 
    
  }

  selectOption(option:Option):void {
    if(!this.read_only){
      if(this.optionExist(option)) {
        this.selected_options = this.selected_options.filter((_option:Option) => _option !== option)
      } else {
        this.selected_options.push(option)
      }
      this.options_change.emit(this.selected_options);
    }
  }

  optionExist(option:Option):boolean {
    return this.selected_options.includes(option);
  }

  ngOnInit() {
    
  }
  
}
