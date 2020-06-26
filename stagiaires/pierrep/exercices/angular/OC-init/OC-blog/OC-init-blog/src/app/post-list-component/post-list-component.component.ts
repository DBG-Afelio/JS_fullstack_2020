import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.css']
})
export class PostListComponentComponent implements OnInit {

 @Input() listarticles: any[];

 listArticlesIteration(){
   this.listarticles.forEach(element => {
     console.log(element);
   })
 }

disCheck = true;

  lastUpdate = new Date();

 appareils = [
  {
    name: 'Machine à laver',
    status: 'éteint'
  },
  {
    name: 'Frigo',
    status: 'allumé'
  },
  {
    name: 'Ordinateur',
    status: 'éteint'
  },
  {
    name: 'Ordinateur',
    status: 'éteint'
  }
  
];

  constructor() { 
    
  }

  ngOnInit(): void {
  }

onClicked() {
  
    console.log(this.appareils[name])
      
    };


getColor(){

  return 'blue'
  
};

giveDate(){

}


}
