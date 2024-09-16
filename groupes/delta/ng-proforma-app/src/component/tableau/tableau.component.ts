import { Component, OnInit, Input, ViewChild } from '@angular/core';
import{MatPaginator, PageEvent} from '@angular/material/paginator'

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.css']
})
export class TableauComponent implements OnInit {
  @Input() tableau: any[];
  lowValue = 0 ;
  highValue= 10;
  pageSize = 10 ;
  pageSizeOptions =[5,10];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @Input() tableauOfHeader: string[];
  @Input() link: string;
  //@ViewChild(MatPaginator) paginator :  MatPaginator ;
  sortby: [string,boolean] = ["id",false];

  constructor() { }

  ngOnInit() {
   
  }
  //ngAfterViewInit() {
    //this.paginator.page.subscribe(
       //(event) => console.log(event)
//);
    //}
    getPaginator(event:PageEvent){
      this.lowValue = event.pageIndex * event.pageSize;
      this.highValue = this.lowValue + event.pageSize;
      
      console.log(this.highValue,this.lowValue);
    return event ;
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
