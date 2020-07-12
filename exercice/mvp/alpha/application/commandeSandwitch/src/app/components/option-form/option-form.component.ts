import { Component, OnInit, Input } from '@angular/core';
import { Option } from 'src/app/models/optionModel/Option';

@Component({
  selector: 'app-option-form',
  templateUrl: './option-form.component.html',
  styleUrls: ['./option-form.component.css']
})
export class OptionFormComponent implements OnInit {

  @Input() option: Option;
  constructor() { }

  public deleteOption() {
    alert('Supprimer cette option');
  }
  
  ngOnInit(): void {
  }

}
