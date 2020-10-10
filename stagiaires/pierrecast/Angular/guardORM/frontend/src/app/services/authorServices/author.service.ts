import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { Author } from 'src/app/models/authorModels/Author';
import { AuthorDto } from 'src/app/models/authorModels/AuthorDto';
import { map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  url: string = 'https://api.pierre-cast.ga/author';

  constructor(
    private http: HttpClient,
    private router: Router,
  
  ) { }

  public getList(): Observable<Author[]> {
    return this.http.get<AuthorDto[]>(this.url)
      .pipe(
        map((arrayAuthorDto : AuthorDto[]) => {
          return arrayAuthorDto.map(authorDto => Author.fromDto(authorDto));
        })
      )
    ;
  }

  public getAuthorByCurrentUser(id: number): Observable<Author> {
    return this.http.get<AuthorDto>(this.url + '/' +id) // cureentUser
    .pipe(
      map(authorDto => Author.fromDto(authorDto)),
    )
  ;
  }

  public getAuthorById(id: number): Observable<Author> {
    return this.http.get<AuthorDto>(this.url + '/' +id)
      .pipe(
        map(authorDto => Author.fromDto(authorDto)),
      )
    ;
  }

  createAuthor(payload: Author): Observable<Author> {
    return this.http
      .post<Author>(this.url, payload.toSetDto())
      .pipe(
        catchError((error: any) => throwError(error))
      );
  }

  updateAuthor(payload: Author): Observable<Author> {
    return this.http
      .patch<Author>(`${this.url}/${payload.id}`, payload.toSetDto())
      .pipe
      (
        catchError((error: any) =>  throwError(error))
      );
  }

  removeAuthor(payload: Author): Observable<Author> {
    return this.http
      .delete<any>(`${this.url}/${payload.id}`)
      .pipe(
        catchError((error: any) =>  throwError(error))
      );
  }

  public navigateToAdmin() {
    this.router.navigateByUrl(`/admin/authors`);
  }
}
