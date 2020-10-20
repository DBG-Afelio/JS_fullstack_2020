import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../Models/user';
import jwt_decode from "jwt-decode";
import { GetUserDto } from '../Models/Dtos/UserDto/get-user.dto';
import { CreateUserDto } from '../Models/Dtos/UserDto/create-user.dto';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  createUser(user:User):Observable<CreateUserDto>{

    return this.http.post<CreateUserDto>("http://localhost:3000/user",user.toDto())

  }

  getCurrentUser():Observable<User>{

    let currentUser = sessionStorage.getItem("currentUser")
    if(currentUser){

      return this.getUserByLogin(jwt_decode(currentUser).userLogin)

    }
    console.log(currentUser)
    return of(null)
  }

  private getUserByLogin(login:string):Observable<User>{

    return this.http.get<GetUserDto>(`http://localhost:3000/user/login/${login}`)
      .pipe(

        map(userFound => {return User.fromDto(userFound)})

      )

  }


}
