import { Component, OnInit } from '@angular/core';
import { UsersListService } from 'src/app/services/users-list.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  constructor(private usersListService:UsersListService) { }

  ngOnInit(): void {
  }

}
