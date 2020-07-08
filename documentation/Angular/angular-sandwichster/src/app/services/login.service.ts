import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/interfaces/user'


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private urlAPI: string = "http://localhost:3000/";

  isAuth = false;

  data = [];

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

  userCheck(){

  }

  currentUser(){ //décrit le type d'utilisateur simple ou admin
    
  }

  credentialsValidation(){

  }

  checkDBForUser() {
    
  }

}
