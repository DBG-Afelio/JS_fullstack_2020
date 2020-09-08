import { Injectable } from '@angular/core';
import { User } from '../models/user/user';

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {

  constructor() { }

  getUserById(userId:number):Promise<User>{

    return new Promise((_)=>{

      //return new User()

    })

  }
  
}
