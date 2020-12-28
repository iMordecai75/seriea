import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ApiResponse } from '../models/api-response';

const API = environment.url;

@Injectable({
  providedIn: 'root'
})
export class RankingService {

  constructor(private http: HttpClient) { }

  getTeams(): Observable<ApiResponse> {
    const token = localStorage.getItem('token');
    const options = this.headers(token);

    return this.http.get<ApiResponse>(`${API}/teams.php`, { headers: options });

  }

  getForecasts(): Observable<ApiResponse> {
    const token = localStorage.getItem('token');
    const options = this.headers(token);

    return this.http.get<ApiResponse>(`${API}/forecasts.php`, { headers: options });
  }

  postForecasts(datiForm: any[]): Observable<ApiResponse> {
    const token = localStorage.getItem('token');
    const options = this.headers(token);
    const body = this.body(datiForm);

    return this.http.post<ApiResponse>(`${API}/forecasts.php`, body, { headers: options })
      .pipe(
        map((res: ApiResponse) => {
          return res;
        }),
        catchError(this.errorHandler)
      );
  }

  getMatchsDay() {
    return this.http.get<ApiResponse>(`${API}/matches.php`);
  }

  private body(objs: any[]): HttpParams {
    let params = new HttpParams();
    objs.forEach(element => {
      params = params.set(element.key, element.value);
    });

    return params;
  }

  private headers(token: string): HttpHeaders {
    const headers: HttpHeaders = new HttpHeaders()
      .set('content-type', 'application/x-www-form-urlencoded')
      .set('Authorization', 'Bearer ' + token);

    return headers;
  }

  errorHandler(error: any): Observable<never> {
    console.log(error);
    let msg: string;
    if (error instanceof HttpErrorResponse) {
      if (error.status === 0) {
        msg = 'Applicazione offline';
      } else {
        msg = `Si è verificato un errore: ${error.error.msg} (server status code ${error.status})`;
      }

      return throwError(msg);
    }

    return throwError(`Si è verificato un errore di tipo: ${error.message}`);
  }
}
