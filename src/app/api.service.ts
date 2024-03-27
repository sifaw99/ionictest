import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Person } from './person';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = 'http://localhost:8000/persons/';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  getPersons(): any {
    return this.http.get(apiUrl)
      .pipe(
        tap(product => console.log('fetched persons')),
        
      );
  }
  
  getPerson(id: any): any {
    const url = `${apiUrl}/${id}`;
    return this.http.get(url).pipe(
      tap(_ => console.log(`fetched person id=${id}`)),
     
    );
  }
  
  addPerson(person: Person): any {
    return this.http.post(apiUrl, person, httpOptions).pipe(
      // tap((per: Person) => console.log(`added person w/ id=${per._id}`)),
     
    );
  }
  
  updatePerson(id: any, person: any): any {
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, person, httpOptions).pipe(
      tap(_ => console.log(`updated person id=${id}`)),
    
    );
  }
  
  deletePerson(id: any): any {
    const url = `${apiUrl}/${id}`;
  
    return this.http.delete(url, httpOptions).pipe(
      tap(_ => console.log(`deleted person id=${id}`)),
    );
  }
}
