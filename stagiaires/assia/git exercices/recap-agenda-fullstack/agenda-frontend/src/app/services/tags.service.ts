import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { CreateTagDto } from '../models/tag.model/create-tag-dto';
import { Tag } from '../models/tag.model/tag';
import { TagDto } from '../models/tag.model/tag-dto';

@Injectable({
  providedIn: 'root'
})
export class TagsService {

  public url = 'http://localhost:3000/tag';
  constructor(
    private http: HttpClient,
  ) { }

  public getAll(): Observable<Tag[]> {
    return this.http.get<TagDto[]>(this.url)
      .pipe(
        map((tagListDto: TagDto[]) => tagListDto.map((tagDto: TagDto) => Tag.fromDto(tagDto))),
        catchError((error: any) => throwError(error.json()))
      );
  }

  public getById(id: number): Observable<Tag> {
    return this.http.get<TagDto>(`${this.url}/${id}`)
      .pipe(
        map((tagDto: TagDto) => Tag.fromDto(tagDto)),
        catchError((error: any) => throwError(error.json()))
      );
  }

  public create(tagToCreate: Tag): Observable<Tag> {
    return this.http.post<CreateTagDto>(this.url, tagToCreate.toCreateTagDto())
      .pipe(
        map((newTagDto: TagDto) => Tag.fromDto(newTagDto)),
        catchError((error: any) => throwError(error.json()))
      );
  }

  public update(tagToUpdate: Tag): Observable<Tag> {
    return this.http.patch<TagDto>(`${this.url}/${tagToUpdate.id}`, tagToUpdate.toCreateTagDto())
      .pipe(
        map((upTagDto: TagDto) => Tag.fromDto(upTagDto)),
        catchError((error: any) => throwError(error.json()))
      );
  }

  public delete(tagToDelete: Tag): Observable<any> {
    return this.http.delete<TagDto>(`${this.url}/${tagToDelete.id}`)
      .pipe(
        catchError((error: any) => throwError(error.json()))
      );
  }
}
