import { Component, OnInit } from '@angular/core';
import { UsersListService } from 'src/app/services/users-list.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userListService:UsersListService) { }

  ngOnInit(): void {
  }

}
