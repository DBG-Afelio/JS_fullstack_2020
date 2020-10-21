import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Tag} from '../Models/tag'
import { TagDto } from '../Models/Dtos/TagDto/tag.dto';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class TagService {

  constructor(private http:HttpClient) { }

  createTag(tag:Tag):Observable<TagDto>{

    return this.http.post<TagDto>("http://localhost:3000/tag",tag.toDto())

  }

  getAllTags():Observable<Tag[]>{

    return this.http.get<TagDto[]>(`http://localhost:3000/tag`)
    .pipe(
      map((arrayTagDto:TagDto[])=> arrayTagDto.map((tagDto:TagDto)=>{
    
        return Tag.fromDto(tagDto)
      }))
    )

  }

}
