import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css']
})
export class NewuserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  checkInputEmpty($value:string):boolean {
    return !$value.length as boolean;
  }

}
