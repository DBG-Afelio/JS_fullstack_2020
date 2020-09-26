import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { CreateEventDto } from '../models/event.model/create-event-dto';
import { EventDto } from '../models/event.model/event-dto';
import { MyEvent } from '../models/event.model/MyEvent';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  public url = 'http://localhost:3000/event';
  constructor(
    private http: HttpClient,
  ) { }

  public getAll(): Observable<MyEvent[]> {
    return this.http.get<EventDto[]>(this.url)
      .pipe(
        map((eventListDto: EventDto[]) => eventListDto.map((eventDto: EventDto) => MyEvent.fromDto(eventDto))),
        catchError((error: any) => throwError(error.json()))
      );
  }

  public getById(id: number): Observable<MyEvent> {
    return this.http.get<EventDto>(`${this.url}/${id}`)
      .pipe(
        map((eventDto: EventDto) => MyEvent.fromDto(eventDto)),
        catchError((error: any) => throwError(error.json()))
      );
  }

  public create(eventToCreate: MyEvent): Observable<MyEvent> {
    return this.http.post<CreateEventDto>(this.url, eventToCreate.toCreateEventDto())
      .pipe(
        map((newEventDto: EventDto) => MyEvent.fromDto(newEventDto)),
        catchError((error: any) => throwError(error.json()))
      );
  }

  public update(eventToUpdate: MyEvent): Observable<MyEvent> {
    return this.http.patch<EventDto>(`${this.url}/${eventToUpdate.id}`, eventToUpdate.toCreateEventDto())
      .pipe(
        map((upEventDto: EventDto) => MyEvent.fromDto(upEventDto)),
        catchError((error: any) => throwError(error.json()))
      );
  }

  public delete(eventToDelete: MyEvent): Observable<any> {
    return this.http.delete<EventDto>(`${this.url}/${eventToDelete.id}`)
      .pipe(
        catchError((error: any) => throwError(error.json()))
      );
  }
}
