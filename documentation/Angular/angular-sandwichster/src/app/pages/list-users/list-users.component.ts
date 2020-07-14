import { Component, OnInit } from '@angular/core';
import { UserModel }  from 'src/app/interfaces/user.model';
import { UserService } from 'src/app/services/user.service';
import { DisplayUserComponent } from '../display-user/display-user.component';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  public arrayUsers: UserModel[];
  public currentUserIndex: number;

  constructor(public listusers: UserService, private displayuser: DisplayUserComponent) {
    this.listusers.getUsers().subscribe((data) => this.arrayUsers = data)
   }

  ngOnInit() {
    return this.arrayUsers;
  }

  //  Methodes User a completer

  addUser() {
    // return this.listusers
  }

  removeUser() {

  }

  updateUser() {
    // return this.listusers.updateUser()
  }

}
