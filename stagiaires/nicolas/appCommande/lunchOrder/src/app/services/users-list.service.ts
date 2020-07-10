import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { UserDto } from '../models/user-dto';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersListService {

  //private currentUser:User=null;
  private currentUserSubject:BehaviorSubject<User> = new BehaviorSubject(null);


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

    return this.http.post<User>('http://localhost:3000/utilisateurs',newUser.toDto())

  }
  removeUser(userId:number){

    return this.http.delete<UserDto>(`http://localhost:3000/utilisateurs/${userId}`)

  }
  updateUser(updatedUser:User){

    return this.http.put<UserDto>('http://localhost:3000/utilisateurs/' + updatedUser.id,updatedUser.toDto())

  }

  getUserByLogin(login:string):Observable<User>{
    return this.http.get<UserDto[]>(`http://localhost:3000/utilisateurs?login=${login}`)
      .pipe(
        map((userDtoArray:UserDto[]) => {
          return userDtoArray.length>0?User.fromDto(userDtoArray[0]):null
        
        })
      )
  }
  setLoginUser(login:string,password:string):Observable<boolean>{
    return this.getUserByLogin(login).pipe(
      map(foundUser =>{
        if(foundUser){
            if(foundUser.checkPassword(password)){
                //this.currentUser=foundUser;
                this.currentUserSubject.next(foundUser)
                return true;
            }
          }
          return false
        })
      )
  }
  /*getCurrentUser():User{
    return this.currentUser
  }*/
  getCurrentUser(): Observable<User>{

    return this.currentUserSubject.asObservable()

  }
  logoutUser(){
    this.currentUserSubject.next(null)
  }

}
