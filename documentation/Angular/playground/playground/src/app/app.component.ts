import { Observable, Subject } from 'rxjs';
import { TestService } from './services/test.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mon application';
  cpt = 0;
  observable: Observable<number>;
  sujetexterne: Subject<number>;

  constructor(private testService: TestService) {
    this.title = 'Nouveau titre';
    this.observable = this.testService.getNombre();
    this.observable.subscribe((nb) => {
      console.log(nb);
    });

    this.sujetexterne = this.testService.subject;

    this.sujetexterne.subscribe((nb) => {
      console.log('sujet emis', nb);
    });
  }

  updateTitle(oldtitle: string) {
    this.title = `update ${oldtitle}`;
  }

  updateCpt() {
    this.cpt = 100;
  }

}
