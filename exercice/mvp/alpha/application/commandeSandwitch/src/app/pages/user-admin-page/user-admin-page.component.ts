import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/userService/user.service';
import { User } from 'src/app/models/userModel/user';

@Component({
  selector: 'app-user-admin-page',
  templateUrl: './user-admin-page.component.html',
  styleUrls: ['./user-admin-page.component.css']
})
export class UserAdminPageComponent implements OnInit {

  public userList: User[] = [];
  constructor(private userService: UserService) { 
    this.userService.getList().subscribe((users) => this.userList = users);
  }

  ngOnInit(): void {
  }

}
