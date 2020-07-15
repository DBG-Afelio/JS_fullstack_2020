import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from 'src/app/interfaces/user.model';
import { map } from 'rxjs/operators';
import { Observable, throwError, of, BehaviorSubject } from 'rxjs'
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})

// PIERRE

export class LoginService {

  private urlAPI: string = "http://localhost:3000/";
  private currentUser$: BehaviorSubject<UserModel> = new BehaviorSubject<UserModel>(null);

  isAuth = false;

  data = [];

  currentUser: UserModel;

constructor(private http: HttpClient, private route: Router) { } // je suppose que HttpClient est l'équivalent de Observable mais dans le cas de json-server

  signIn(){
    console.log(this.currentUser$);
    return this.isAuth = true;
  }

  signOut(){
    console.log(this.currentUser$);
    this.route.navigate(['/']); 
    this.currentUser$.next(null);
    return this.isAuth = false;
  }

  getUsers(): Observable<UserModel[]>{
    return this.http.get<UserModel[]>(this.urlAPI + 'utilisateurs');  
  }

  getUserByLogin(login:string){ //
    return this.http.get<UserModel[]>(this.urlAPI + 'utilisateurs?login=' + login) //particularité de jsonserver de filter un service
    .pipe(map(users => {
      if(users.length > 0){
        return UserModel.fromDto(users[0]);
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
        this.currentUser$.next(this.currentUser); 
        return true;
      }
    }
    return false;
  }));
}

getCurrentUser(){
  if (!this.currentUser$) {
    this.route.navigate(['/']);
  }
  return this.currentUser;
}


  credentialsValidation(){

  }

  checkDBForUser() {
    
  }

getCurrentUserAsObservable(): Observable<UserModel> {
    return this.currentUser$.asObservable();
}

}
