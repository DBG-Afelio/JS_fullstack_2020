
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {


  public coulArray:string[] = ['blue', 'gray', 'green']
  public coul:string = 'purple';
  constructor() {
    let i=0;
    setInterval(() => this.coul = this.coulArray[i++], 500)
  }

}
