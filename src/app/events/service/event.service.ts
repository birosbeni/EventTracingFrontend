import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EventHeader } from '../models/event-header.model';
import { EventDetails } from '../models/event-details.model';

@Injectable()
export class EventService {
  private apiUrl = 'https://localhost:7244/api';

  constructor(private http: HttpClient) {}

  public getEvents(): Observable<EventHeader[]> {
    return this.http.get<EventHeader[]>(`${this.apiUrl}/event`);
  }

  public getEventsByLocation(location: string): Observable<EventHeader[]> {
    return this.http.get<EventHeader[]>(`${this.apiUrl}/event/${location}`);
  }

  public getEventById(id: string): Observable<EventDetails> {
    return this.http.get<EventDetails>(`${this.apiUrl}/event/${id}`);
  }

  public createEvent(event: Event): Observable<any> {
    return this.http.post(`${this.apiUrl}/event`, event);
  }

  public updateEvent(id: string, event: Event): Observable<any> {
    return this.http.put(`${this.apiUrl}/event/${id}`, event);
  }

  public deleteEvent(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/event/${id}`);
  }
}
