import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/models/userModel/user';
import { Authentication } from 'src/app/models/userModel/authentication.enum';

@Component({
  selector: 'app-authentication-form',
  templateUrl: './authentication-form.component.html',
  styleUrls: ['./authentication-form.component.css']
})
export class AuthenticationFormComponent implements OnInit {
  @Input() currentUser: User;
  @Input() userList: User[];
  public authentication: Authentication = Authentication.LOGIN
  public loginIn: string = '';
  public pwdIn: string = '';
  @Output() UserStatusChange: EventEmitter<User> = new EventEmitter();
 
  constructor() { }

  ngOnInit(): void {
  }

  public changeConnexionRequest(): void {
    
  }

  public setAuthStatus(): Authentication {
    return this.currentUser ? this.authentication = Authentication.LOGOUT : Authentication.LOGIN;
  }
}
