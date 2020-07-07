import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserDto } from '../models/user-dto';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersListService {

  constructor(private http:HttpClient) { }

//getUsers

  getUsersList():Observable<User[]>{

    return this.http.get<UserDto[]>('http://localhost:3000/utilisateurs')
    .pipe(
      map((arrayUserDto:UserDto[]) => {
        return arrayUserDto.map((userDto:UserDto) => User.fromDto(userDto)) 
      })
    )

  }
  getUserById(userId:number):Observable<User>{

    return this.http.get<UserDto>(`http://localhost:3000/utilisateurs/${userId}`)
    .pipe(
      map((userDto:UserDto) => {
        return User.fromDto(userDto) 
      })
    )

  }


//modifyUsers

  addUser(newUser:User){

    this.http.post<User>('http://localhost:3000/utilisateurs',newUser.toDto())

  }
  removeUser(userId:number){

    this.http.delete<UserDto>(`http://localhost:3000/utilisateurs/${userId}`)

  }
  updateUser(updatedUser:User){

    this.removeUser(updatedUser.id)
    this.addUser(updatedUser)

  }


}
