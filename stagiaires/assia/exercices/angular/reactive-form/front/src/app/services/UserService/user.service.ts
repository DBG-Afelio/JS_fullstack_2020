import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userList: User[] = [];
  userListSubject = new Subject<User[]>();

  public emitUserList():void {
    this.userListSubject.next(this.userList);
  }

  public addUser(user: User): void{
    this.userList.push(user);
    this.emitUserList();
  }
  
}
