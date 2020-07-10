import { Component, OnInit } from '@angular/core';
import { User }  from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  public arrayUsers: User[];

  constructor(public listusers: UserService) {
    this.listusers.getUsers().subscribe((data) => this.arrayUsers = data)
   }

  ngOnInit() {
    return this.arrayUsers;
  }

  //  Methodes User a completer

  addUser() {

  }

  removeUser() {
    
  }

  updateUser() {
    
  }

}
