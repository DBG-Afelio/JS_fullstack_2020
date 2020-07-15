import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.css']
})
export class TableauComponent implements OnInit {
  @Input() tableau: any[];
  @Input() tableauOfHeader: string[];
  sortby: [string,boolean] = ["id",false];

  constructor() { }

  ngOnInit() {
  }

  sortMembre(){
    const sortedtab = this.tableau.slice();
    return sortedtab.sort((membre1, membre2) =>{
      let m1 = typeof membre1[this.sortby[0]] === "string" ? membre1[this.sortby[0]].toLowerCase() : membre1[this.sortby[0]];
      let m2 = typeof membre2[this.sortby[0]] === "string" ? membre2[this.sortby[0]].toLowerCase() : membre2[this.sortby[0]];
      if (m1<m2){
        return this.sortby[1] ? 1 : -1;
      }else if(m1>m2){
        return !this.sortby[1] ? 1 : -1;
      } else {
        return 0;
      }
    })
  }

  sortBy(titre:string):void{
    this.sortby = this.sortby[0]===titre ? [titre,!this.sortby[1]] : [titre,false];
  }

}
