import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/model/user';
import { UserDto } from 'src/model/userDTO';

@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css']
})
export class NewuserComponent implements OnInit {
  @Input() user : User;
  @Output() create : EventEmitter<UserDto> = new EventEmitter<UserDto>();

  constructor() { }

  ngOnInit() {
  }

  checkInputEmpty($value:string):boolean {
    return !$value.length as boolean;
  }
  createUser(){
    if(this.checkInputEmpty){
      this.create.emit(this.user.toDto());
    }
  }
}
