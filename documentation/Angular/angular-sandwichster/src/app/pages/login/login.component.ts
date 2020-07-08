import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  authStatus: boolean;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.authStatus = this.loginService.isAuth;
  }

onSignIn(){
  this.loginService.signIn();
  
}

onSignout(){
  this.loginService.signOut();
}

getUsersFromService(){
 this.loginService.getUsers().subscribe(data => data);
}

userCheck(){
  console.log(this.getUsersFromService());
}

}
