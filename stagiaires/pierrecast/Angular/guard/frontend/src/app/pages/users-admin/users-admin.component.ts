import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/userModels/User';
import { UserService } from 'src/app/services/userServices/user.service';

@Component({
  selector: 'app-users-admin',
  templateUrl: './users-admin.component.html',
  styleUrls: ['./users-admin.component.css']
})
export class UsersAdminComponent implements OnInit {

  public listUser: User[];
  constructor(private userService: UserService) { 
    this.userService.getList().subscribe(list => {
      this.listUser = list;
    });
  }

  ngOnInit(): void {
  }

}
