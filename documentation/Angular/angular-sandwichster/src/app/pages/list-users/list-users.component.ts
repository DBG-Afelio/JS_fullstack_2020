import { Component, OnInit } from '@angular/core';
import { User }  from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  constructor() { }

  listUsers: User[];

  ngOnInit() {

  }

  addUser() {

  }

  removeUser() {
    
  }

  updateUser() {
    
    
  }

}
