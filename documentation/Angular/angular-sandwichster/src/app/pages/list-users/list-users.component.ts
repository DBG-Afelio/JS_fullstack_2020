import { Component, OnInit } from '@angular/core';
import { User }  from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  private listUsers: User[];

  constructor(
    public userService: UserService
  ) {
    this.userService.getUsers().subscribe((listeRecue) => {
      this.listUsers = listeRecue;

    });
   }

  ngOnInit() {

  }

  getListUsers(){
    return this.listUsers;
  }

  addUser() {

  }

  removeUser() {
    
  }

  updateUser() {
    
    
  }

}
