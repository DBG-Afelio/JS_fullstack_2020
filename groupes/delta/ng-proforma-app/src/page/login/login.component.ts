import { Component, OnInit, OnChanges } from '@angular/core';
import { FormControl, FormBuilder } from '@angular/forms';
import { UsersService } from 'src/service/users.service';
import { Router } from '@angular/router';
import { User } from 'src/model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnChanges {
  login: string;
  password: string;
  user: User;
  error: boolean = false;

  constructor(private usersService:UsersService, private route: Router) {
    this.usersService.user.subscribe(user => this.user = user)
  }

  auth(login:string, password:string): void {
    this.error = false;
    this.usersService.authentification(login, password).subscribe((user:User) => {
      if (user) {
        this.route.navigate(["/"]);
      } else {
        this.error = true;
      }
    });
  }

  ngOnInit() {
  }

  ngOnChanges() {
    if(this.user) {
      this.route.navigate(['/']);
    }
    console.log('reload');
    
  }

}
