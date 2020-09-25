import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Event } from 'src/app/models/eventModel/Event';
import { EventDto } from 'src/app/models/eventModel/EventDto';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  url: string = 'http://localhost:3000/event';

  constructor(
    private http: HttpClient,  
  ) { }

  public getList(): Observable<Event[]> {
    return this.http.get<EventDto[]>(this.url)
      .pipe(
        map((arrayEventDto : EventDto[]) => {
          return arrayEventDto.map(eventDto => Event.fromDto(eventDto));
        })
      )
    ;
  }

  public getEventById(id: number): Observable<Event> {
    return this.http.get<EventDto>(this.url + '/' +id)
      .pipe(
        map(eventDto => Event.fromDto(eventDto)),
      )
    ;
  }

  /* NAMUR */ 
  public getNamurList(): Observable<Event[]> {
    return this.http.get<EventDto[]>(this.url+ '/namur')
      .pipe(
        map((arrayEventDto : EventDto[]) => {
          return arrayEventDto.map((eventDto: EventDto) => Event.fromDto(eventDto));
        }),
      )
    ;
  }

  createEvent(payload: Event): Observable<Event> {
    return this.http
      .post<Event>(this.url, payload.toUpdateDto())
      .pipe(
        catchError((error: any) => throwError(error)));
  }

  updateEvent(payload: Event): Observable<Event> {
    return this.http
      .patch<Event>(`${this.url}/${payload.id}`, payload.toUpdateDto())
      .pipe(catchError((error: any) => throwError(error)));
  }

  removeEvent(payload: Event): Observable<Event> {
    return this.http
      .delete<any>(`${this.url}/${payload.id}`)
      .pipe(catchError((error: any) => throwError(error)));
  }
}
 