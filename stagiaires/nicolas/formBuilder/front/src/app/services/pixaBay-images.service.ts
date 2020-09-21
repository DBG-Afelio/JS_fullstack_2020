import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppImage } from '../models/image/image';
import {  PixaBayRessourceDto } from '../models/interfaces/pixaBay-image-dto';

@Injectable({
  providedIn: 'root'
})
export class PixaBayImagesService {

  constructor(private http:HttpClient) { }


  getImages(name:string,numberOf:number = 10,category?):Observable<AppImage[]>{

   return this.http.get<PixaBayRessourceDto>(`https://pixabay.com/api/?key=18361326-db18c0aed51d3bec55e10ee00&q=${name}&per_page=${numberOf}${category?'&category='+category:""}`)
    .pipe(
      map((requestFound) => {

        let imageArray = [];
          requestFound.hits.forEach(image => imageArray.push(AppImage.fromDto(image)))
        return imageArray

      })

    )

  }

}
