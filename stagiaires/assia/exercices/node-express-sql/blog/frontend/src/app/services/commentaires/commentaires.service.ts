import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Commentaire } from 'src/app/models/commentaireModel/Commentaire';
import { Observable } from 'rxjs';
import { CommentaireDto } from 'src/app/models/commentaireModel/CommentaireDto';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommentairesService {

  url: string = "http://localhost:3000/commentaires";

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  public getCommentList(): Observable<Commentaire[]> {
    return this.http.get<CommentaireDto[]>(this.url)
      .pipe(
        map((commentListDto: CommentaireDto[]) => {
          return commentListDto.map((commentDto) => Commentaire.fromDto(commentDto));
        })
      );
  }

  public getCommentById(id: number): Observable<Commentaire> {
    return this.http.get<CommentaireDto>(`${this.url}/${id}`)
      .pipe(
        map((commentDto: CommentaireDto) => Commentaire.fromDto(commentDto))
      )
  }
}