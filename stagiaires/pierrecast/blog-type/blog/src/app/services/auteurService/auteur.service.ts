import { Injectable } from '@angular/core';
import { Auteur } from 'src/app/models/auteurModel/Auteur';
import { AuteurDto } from 'src/app/models/auteurModel/AuteurDto';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuteurService {
  url: string = 'http://localhost:8080/articles';

  constructor(
    private http: HttpClient,
  
  ) { }

  public getList(): Observable<Auteur[]> {
    return this.http.get<AuteurDto[]>(this.url)
      .pipe(
        map((arrayAuteurDto : AuteurDto[]) => {
          return arrayAuteurDto.map(auteurDto => Auteur.fromDto(auteurDto));
        }),
      )
    ;
  }
  
  public getAuteurById(id: number): Observable<Auteur> {
    return this.http.get<AuteurDto>(this.url + '/' +id)
      .pipe(
        map(auteurDto => Auteur.fromDto(auteurDto)),
      )
    ;
  }
}
