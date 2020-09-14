import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Nationality } from 'src/app/models/nationalityModel/Nationality';
import { NationalityDto } from 'src/app/models/nationalityModel/NationalityDto';

@Injectable({
  providedIn: 'root'
})
export class NationalityService {

  url: string = 'http://localhost:3000/nationalities';

  constructor(
    private http: HttpClient,  
  ) { }

  public getList(): Observable<Nationality[]> {
    return this.http.get<NationalityDto[]>(this.url)
      .pipe(
        map((arrayNationalityDto : NationalityDto[]) => {
          return arrayNationalityDto.map(nationalityDto => Nationality.fromDto(nationalityDto));
        }),
      )
    ;
  }

  public getNationalityById(id: number): Observable<Nationality> {
    return this.http.get<NationalityDto>(this.url + '/' +id)
      .pipe(
        map(nationalityDto => Nationality.fromDto(nationalityDto)),
      )
    ;
  }
}
