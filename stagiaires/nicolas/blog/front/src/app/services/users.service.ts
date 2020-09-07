import { Injectable } from '@angular/core';
import { User } from '../models/user/user';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { UserDto } from '../models/user/user-Dto';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private currentUser:BehaviorSubject<User> = new BehaviorSubject(new User(1,"anonymous","anonymous","",""));

  constructor(private http:HttpClient) { }

  getCurrentUser(): Observable<User>{

    return this.currentUser.asObservable()

  }
  getUserById(userId:number):Observable<User>{

    return this.http.get<UserDto>(`http://localhost:3000/utilisateurs/${userId.toString()}`)
      .pipe(
        map((userDto:UserDto) => {

          return User.fromDto(userDto)

        })

      )
  }

}
