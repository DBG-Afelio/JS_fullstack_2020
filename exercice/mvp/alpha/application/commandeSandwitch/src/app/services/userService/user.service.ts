import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { map} from 'rxjs/operators'
import { IUserDto } from './../../models/userModel/iuser-dto';
import { User } from 'src/app/models/userModel/user';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private currentUser: BehaviorSubject <User> = new BehaviorSubject(null);
  public userUrl: string = 'http://localhost:3000/utilisateurs/';

  constructor(private http: HttpClient) { 
    this.setCurrentUserToUnknown();
  }

  public setCurrentUser(user: User): void {
   this.currentUser.next(user);
  }

  public setCurrentUserToUnknown(): void {
    this.currentUser.next(null);
  }

  public getCurrentUser(): Observable<User> {
    return this.currentUser.asObservable();
  }

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

  public updateUser(payload: User): Observable<IUserDto>  {
    return this.http.put<IUserDto>(`${environment.baseUrl}/utilisateurs/${payload.id}`, payload.toDto())
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }
  
  public deleteUser(payload: User): Observable<IUserDto>  {
    return this.http.delete<IUserDto>(`${environment.baseUrl}/utilisateurs/${payload.id}`)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }
  public addUser(payload: User): Observable<IUserDto>  {
    return this.http.post<IUserDto>(`${this.userUrl}`, payload.toDto())
      .pipe(catchError((error: any) => throwError(error.json())));
  }
}
