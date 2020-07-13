import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { UserModel } from 'src/app/interfaces/user.model';


@Component({
  selector: 'app-details-user',
  templateUrl: './details-user.component.html',
  styleUrls: ['./details-user.component.css']
})
export class DetailsUserComponent implements OnInit {

  @Input() currentUser: UserModel;

  @Output() createUser = new EventEmitter<UserModel>()
  @Output() updateUser = new EventEmitter<UserModel>()
  @Output() removeUser = new EventEmitter<UserModel>()

  constructor() {}

  createUserEmitter () {
    // return this.createUser.emit(...)
  }

  updateUserEmitter () {
    // return this.updateUser.emit(...);
  }

  removeUserEmitter () {
    // return this.removeUser.emit(...);
  }


  ngOnInit() {
  }

}
