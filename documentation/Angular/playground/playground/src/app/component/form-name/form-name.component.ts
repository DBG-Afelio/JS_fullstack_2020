import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-name',
  templateUrl: './form-name.component.html',
  styleUrls: ['./form-name.component.css']
})
export class FormNameComponent implements OnInit {

  @Input() previousName: string = null;

  @Output() nameChange: EventEmitter<string> = new EventEmitter();

  value: string;

  constructor() { }

  ngOnInit() {
    this.value = this.previousName;
  }

  onNameChange(newName: string) {
    if (newName.length > 0 && /^\w+$/.test(newName)) {
      this.nameChange.emit(newName)
    }
  }

}
