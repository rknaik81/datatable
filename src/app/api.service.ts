import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private API_URL  =  'https://jsonplaceholder.typicode.com/albums';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private httpClient:  HttpClient) {}

  getContacts() {
    return this.httpClient.get(this.API_URL).pipe(map(this.extractData));

  }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }
}
