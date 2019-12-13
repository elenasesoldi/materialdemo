import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IEmployee } from 'src/assets/model/employee';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable()
export class EmployeeService {

  private url: string;

  constructor(private http: HttpClient) {
    this.url = '/assets/data/employees.json';
  }

  public getEmployees(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this.url).pipe(catchError(this.errorHandler));
  }

  private errorHandler(error: HttpErrorResponse): Observable<never> {
    return throwError(error.message || 'Server Error');
  }
}
