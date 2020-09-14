import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Role } from 'src/app/models/roleModel/Role';
import { RoleDto } from 'src/app/models/roleModel/RoleDto';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  url: string = 'http://localhost:3000/roles';

  constructor(
    private http: HttpClient,  
  ) { }

  public getList(): Observable<Role[]> {
    return this.http.get<RoleDto[]>(this.url)
      .pipe(
        map((arrayRoleDto : RoleDto[]) => {
          return arrayRoleDto.map(roleDto => Role.fromDto(roleDto));
        }),
      )
    ;
  }

  public getRoleById(id: number): Observable<Role> {
    return this.http.get<RoleDto>(this.url + '/' +id)
      .pipe(
        map(roleDto => Role.fromDto(roleDto)),
      )
    ;
  }
}
