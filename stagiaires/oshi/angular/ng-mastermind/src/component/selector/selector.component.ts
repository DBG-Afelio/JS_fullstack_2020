import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css']
})
export class SelectorComponent implements OnInit, OnChanges {
  @Input() colors: string[];
  @Input() actual_lvl: number;
  send_button_aff: boolean = false;
  disp_colors: string[];
  sel_colors: string[] = ['grey','grey','grey','grey'];
  @Output() send_sel_colors: EventEmitter<string[]> = new EventEmitter<string[]>()
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.sel_colors = ['grey','grey','grey','grey'];
    this.checkSendButton();
  }

  selectColor(color: string, i:number):void {
    const iOfGrey:number = this.sel_colors.findIndex(sel_color => sel_color === 'grey');
    if(iOfGrey !== -1) {
      this.sel_colors[iOfGrey] = color;
      if(this.actual_lvl < 3 && color !== 'black') {
        this.colors[i] = 'grey';
      }
    }
    this.checkSendButton();
  }

  checkSendButton(): void {
    this.send_button_aff = this.sel_colors.filter(color => color !== 'grey').length === 4;
  }

  unselectColor(color: string, i:number):void {
    if(color !== 'grey') {
      const iOfGrey = this.colors.findIndex(d_color => d_color === 'grey');
      if(iOfGrey !== -1 || this.actual_lvl === 3 || color === 'black') {
        if(color !== 'black'){
          this.colors[iOfGrey] = color;
        }
        this.sel_colors[i] = 'grey';
      }
    }
    this.checkSendButton();
  }

  sendColors() {
    this.send_sel_colors.emit([...this.sel_colors]);
  }

}
