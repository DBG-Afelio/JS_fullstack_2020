import { Component, OnInit } from '@angular/core';
import { UsersListService } from 'src/app/services/users-list.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  usersList:User[]

  constructor(private usersListService:UsersListService) { }

  ngOnInit(): void {

  this.usersListService.getUsersList().subscribe(userListFound => this.usersList = userListFound )

  }

}
