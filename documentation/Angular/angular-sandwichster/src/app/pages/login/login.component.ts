import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/interfaces/user.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  authStatus: boolean;
  loginError: boolean;
  currentUser: UserModel;

  constructor(private loginService: LoginService, private router: Router) { }

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
 return this.loginService.getUsers().subscribe(data => data);
}

userCheck(login, password){
  
  this.loginService.userAuth(login, password).subscribe(isAuth => {
    if(isAuth){
      if(this.loginService.getCurrentUser().admin){
        this.router.navigate(["for-today"])
        this.loginError = false;
      }
      else{
        this.router.navigate(["list-providers"])
        this.loginError = true;
      }
    }
    else{
      this.loginError = true;
    }
  });
}



}
