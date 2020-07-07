import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersListService {

  constructor() { }

//getUsers

  getUsersList():User[] | null{

    return null

  }
  getUserById(userId:number):User | null{

    return null

  }


//modifyUsers

  addUser(newUser:User){



  }
  removeUser(userId:number){

    

  }
  updateUser(updatedUser:User){

    

  }


}
