import { AfterViewInit, Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/userModels/User';

import { UserService } from 'src/app/services/userServices/user.service';

@Component({
  selector: 'app-users-admin',
  templateUrl: './users-admin.component.html',
  styleUrls: ['./users-admin.component.css']
})
export class UsersAdminComponent implements AfterViewInit, OnInit {

  public listUsers: User[];

  constructor(
      private userService: UserService
    ) {
      this.createListUsers();
  }

  createListUsers() {
    this.userService.getList().subscribe(list => { 
      this.listUsers = list;
    });
  }
  
  ngOnInit() {
    
  }

  ngAfterViewInit() {
    
  }

  public onDelete(user: User) {
    if (confirm("Êtes-vous sûr de vousloir supprimer cet utilisateur")) {
      this.userService.removeUser(user).subscribe(() => {
        this.createListUsers();
      });
    }
  }
}
