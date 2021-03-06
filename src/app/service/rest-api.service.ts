import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Customer } from '../models/customer'
import { User } from '../models/user'
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  apiURL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getCustomers(): Observable<Customer> {
    return this.http.get<Customer>(this.apiURL + '/api/v1/customer')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  getCustomer(id): Observable<Customer> {
    return this.http.get<Customer>(this.apiURL + '/api/v1/customer/' + id)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  createCustomer(customer): Observable<Customer> {
    return this.http.post<Customer>(this.apiURL + '/api/v1/customer', JSON.stringify(customer), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  updateCustomer(id, customer): Observable<Customer> {
    return this.http.put<Customer>(this.apiURL + '/api/v1/customer/' + id, JSON.stringify(customer), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  deleteCustomer(id): Observable<Customer> {
    return this.http.delete<Customer>(this.apiURL + '/api/v1/customer/' + id, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  createUser(user): Observable<User> {
    return this.http.post<User>(this.apiURL = '/api/v1/auth/register', JSON.stringify(user), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // createUser()

  handleError(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
