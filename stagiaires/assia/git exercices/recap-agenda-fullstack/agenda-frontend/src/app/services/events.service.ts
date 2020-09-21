import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { CreateEventDto } from '../models/event.model/create-event-dto';
import { Event } from '../models/event.model/event';
import { EventDto } from '../models/event.model/event-dto';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  public url = 'http://localhost:3000/event';
  constructor(
    private http: HttpClient,
  ) { }

  public getAll(): Observable<Event[]> {
    return this.http.get<EventDto[]>(this.url)
      .pipe(
        map((eventListDto: EventDto[]) => eventListDto.map((eventDto: EventDto) => Event.fromDto(eventDto))),
        catchError((error: any) => throwError(error.json()))
      );
  }

  public getById(id: number): Observable<Event> {
    return this.http.get<EventDto>(`${this.url}/${id}`)
      .pipe(
        map((eventDto: EventDto) => Event.fromDto(eventDto)),
        catchError((error: any) => throwError(error.json()))
      );
  }

  public create(eventToCreate: Event): Observable<Event> {
    return this.http.post<CreateEventDto>(this.url, eventToCreate.toCreateEventDto())
      .pipe(
        map((newEventDto: EventDto) => Event.fromDto(newEventDto)),
        catchError((error: any) => throwError(error.json()))
      );
  }

  public update(eventToUpdate: Event): Observable<Event> {
    return this.http.patch<EventDto>(`${this.url}/${eventToUpdate.id}`, eventToUpdate.toCreateEventDto())
      .pipe(
        map((upEventDto: EventDto) => Event.fromDto(upEventDto)),
        catchError((error: any) => throwError(error.json()))
      );
  }

  public delete(eventToDelete: Event): Observable<any> {
    return this.http.delete<EventDto>(`${this.url}/${eventToDelete.id}`)
      .pipe(
        catchError((error: any) => throwError(error.json()))
      );
  }
}
