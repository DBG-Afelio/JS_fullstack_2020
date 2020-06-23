import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mon application';
  cpt = 0;

  constructor() {
    this.title = 'Nouveau titre';
  }

  updateTitle(oldtitle: string) {
    this.title = `update ${oldtitle}`;
  }

  updateCpt() {
    this.cpt = 100;
  }

}
