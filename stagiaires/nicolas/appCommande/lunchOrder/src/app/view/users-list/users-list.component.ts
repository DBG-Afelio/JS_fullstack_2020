import { Component, OnInit } from '@angular/core';
import { UsersListService } from 'src/app/services/users-list.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  constructor(private usersListService:UsersListService) { }

  ngOnInit(): void {
  }

}
