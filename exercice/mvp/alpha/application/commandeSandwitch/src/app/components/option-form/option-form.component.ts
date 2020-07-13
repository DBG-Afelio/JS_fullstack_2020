import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Option } from 'src/app/models/optionModel/Option';

@Component({
  selector: 'app-option-form',
  templateUrl: './option-form.component.html',
  styleUrls: ['./option-form.component.css']
})
export class OptionFormComponent implements OnInit {

  @Input() option: any;
  @Output() delete: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  public deleteOption() {
    this.delete.emit(this.option);
  }
  
  ngOnInit(): void {
  }

}
