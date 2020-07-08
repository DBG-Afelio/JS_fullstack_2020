import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/interfaces/user';
import { map } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private urlAPI: string = "http://localhost:3000/";

  isAuth = false;

  data = [];

  currentUser: User;

constructor(private http: HttpClient) { } // je suppose que HttpClient est l'équivalent de Observable mais dans le cas de json-server

  signIn(){
    return this.isAuth = true;
  }

  signOut(){
    return this.isAuth = false;
  }

  getUsers(){
    return this.http.get<User[]>(this.urlAPI + 'utilisateurs');  
  }

  getUserByLogin(login:string){ //
    return this.http.get<User[]>(this.urlAPI + 'utilisateurs?login=' + login) //particularité de jsonserver de filter un service
    .pipe(map(users => {
      if(users.length > 0){
        return users[0];
      }
      else{
        return null;
      }
    }
      ))
  }

userAuth(login: string, password: string){
  return this.getUserByLogin(login).pipe(map(foundUser => {
    if(foundUser){
      if(foundUser.password === password){
        this.currentUser = foundUser;
        return true;
      }
    }
    return false;
  }));
}

getCurrentUser(){
  return this.currentUser;
}


  credentialsValidation(){

  }

  checkDBForUser() {
    
  }

}