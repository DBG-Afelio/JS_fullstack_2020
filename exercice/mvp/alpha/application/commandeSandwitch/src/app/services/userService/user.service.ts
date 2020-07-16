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
 // ASSIA = new User("assia", "assia", "rachdi", "assia", 0, 'JSFull', false, false, 4);
  private currentUser: BehaviorSubject <User> = new BehaviorSubject(null); //remettre a (null)
  public userUrl: string = 'http://localhost:3000/utilisateurs/';
  private isUserListUpdated: BehaviorSubject<boolean> = new BehaviorSubject(true);

  constructor(private http: HttpClient) { 
    this.setCurrentUserToUnknown();
  }
  private updateUserList(): void{
    this.isUserListUpdated.next(true);
  }
  public isChangeInUserList(): Observable<boolean>{
    return this.isUserListUpdated.asObservable();
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

  public updateUser(payload: User): void  {
    this.http.put<IUserDto>(`${environment.baseUrl}/utilisateurs/${payload.id}`, payload.toDto()).subscribe({
      next: returnedUserDto => this.updateUserList(),
      error: error => console.error('Erreur Update User in Server', error)
    });
  }
  
  public deleteUser(payload: User): void  {
    this.http.delete<IUserDto>(`${environment.baseUrl}/utilisateurs/${payload.id}`).subscribe({
      next: returnedUserDto => this.updateUserList(),
      error: error => console.error('Erreur Delete User in Server', error)
    });
  }
  public addUser(payload: User): void  {
    this.http.post<IUserDto>(`${this.userUrl}`, payload.toDto()).subscribe({
      next: returnedUserDto => this.updateUserList(),
      error: error => console.error('Erreur Add User in Server', error)
    });
  }
}
