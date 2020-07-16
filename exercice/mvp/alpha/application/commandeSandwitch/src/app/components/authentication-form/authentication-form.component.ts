import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/models/userModel/user';
import { Authentication } from 'src/app/models/userModel/authentication.enum';

@Component({
  selector: 'app-authentication-form',
  templateUrl: './authentication-form.component.html',
  styleUrls: ['./authentication-form.component.css']
})
export class AuthenticationFormComponent implements OnInit {
  //@Input() currentUser: User;
  @Input() userList: User[];
  public authentication: Authentication = Authentication.LOGIN
  public loginIn: string = '';
  public pwdIn: string = '';
 @Output() UserChange: EventEmitter<User> = new EventEmitter();
 
  constructor() { }

  ngOnInit(): void {
  }

  public changeConnexionRequest(login: string, pwd: string): void {

 
      const foundUser = this.findUserFromAuth(login, pwd, this.userList);
      if (foundUser) {
        this.UserChange.emit(foundUser);
      } else {

        alert('Erreur sur login/pwd ou User inexistant');
        throw ('Erreur sur login/pwd ou User inexistant');
      }
 
  }

  

  public findUserFromAuth(login: string, pwd: string, registeredUsers: User[]): User | undefined {
    return registeredUsers.find((user) => (user.login === login && user.pwd === pwd));
  }
  

}
