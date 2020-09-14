import { Injectable } from '@angular/core';
import { User } from '../models/user/user';
import { HttpClient } from '@angular/common/http';
import { Observable, pipe } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

import { Demonym } from '../models/interfaces/demonym.interface';
import { UserDto } from '../models/user/user-dto';
import { Skill } from '../models/interfaces/skill.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient:HttpClient) { }

  getUserById(userId:number):Observable<User>{

    return this.httpClient.get<UserDto[]>(`http://localhost:3000/users/${userId}`)
      .pipe(

        map(usersDto => {

          return User.fromDto(usersDto[0])

        })

      )

  }
  getAllSkills():Observable<Skill[]>{

    return this.httpClient.get<Skill[]>('http://localhost:3000/skills')

  }

  getAllDemonyms():Observable<Demonym[]>{

    return this.httpClient.get<Demonym[]>('https://restcountries.eu/rest/v2/all?fields=demonym;alpha3Code')
      .pipe(

        map(demonyms => {

          return demonyms.filter(demonym=> demonym.demonym)

        })

      )

  }
  postUser(newUser:User){

    return this.httpClient.post<User>('http://localhost:3000/users',newUser.toDto())

  }
  
}
