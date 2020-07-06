import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder } from '@angular/forms';
import { UsersService } from 'src/service/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: string;
  password: string;
  constructor(private usersService:UsersService) { }

  auth(login:string, password:string): void {
    console.log(login, password);
    this.usersService.authentification(login, password);
  }

  ngOnInit() {
  }

}
