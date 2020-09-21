import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Tag } from 'src/app/models/tagModel/Tag';
import { TagDto } from 'src/app/models/tagModel/TagDto';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  url: string = 'http://localhost:3000/tag';

  constructor(
    private http: HttpClient,  
  ) { }

  public getList(): Observable<Tag[]> {
    return this.http.get<TagDto[]>(this.url)
      .pipe(
        map((arrayTagDto : TagDto[]) => {
          return arrayTagDto.map(tagDto => Tag.fromDto(tagDto));
        }),
      )
    ;
  }

  public getTagById(id: number): Observable<Tag> {
    return this.http.get<TagDto>(this.url + '/' +id)
      .pipe(
        map(tagDto => Tag.fromDto(tagDto)),
      )
    ;
  }
}
