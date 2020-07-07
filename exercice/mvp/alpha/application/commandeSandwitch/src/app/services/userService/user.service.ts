import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map} from 'rxjs/operators'
import { IUserDto } from './../../models/userModel/iuser-dto';
import { User } from 'src/app/models/userModel/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public userUrl: string = 'http://localhost:3000/utilisateurs';

  constructor(private http: HttpClient) { }

  public getList(): Observable<User[]> {
    return this.http.get<IUserDto[]>(this.userUrl)
      .pipe(
        map((userDtoList) => {
          return userDtoList.map((userDto) => User.fromDto(userDto))
        }
      )
    );
  }

  public getUserById(id: number): Observable<User> {
    return this.http.get<IUserDto>(`${this.userUrl}/${id}`)
      .pipe(
        map((userDto) => User.fromDto(userDto))
    );
  }

  public getAdmin(): Observable<User> {
    return this.getList()
      .pipe(
        map((list) => list.find((user) => user.isAdmin))
      );
  }
  
}
