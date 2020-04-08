import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { EventApi } from './event/event.component';


@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) {
   }
 

  addPost(post: EventApi): Observable<EventApi>{
    return this.http.post<EventApi>('http://localhost:8080/event/add', post);
  }
  
}
 