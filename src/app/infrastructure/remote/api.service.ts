import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";
import { Formatter } from "../utils/formatter";

@Injectable()
  export class ApiService {
    


    
  constructor(private http: HttpClient) {}


  post(path: string, body = {}): Observable<any> {
    return this.http.post(path, JSON.stringify(body)).pipe(
      catchError((error) => {
        return Formatter.httpErrorFormatter(error);
      })
    );
  }

  getParams(path: string, params?: any): Observable<any> {
    return this.http.get(path + "/" + params).pipe(
      catchError((error) => {
        return Formatter.httpErrorFormatter(error);
      })
    );
  }

  get(path: string, params?: any): Observable<any> {
    return this.http.get(path, { params }).pipe(
      catchError((error) => {
        return Formatter.httpErrorFormatter(error);
      })
    );
  }

  put(path: string, body = {}): Observable<any> {
    return this.http.put(path, JSON.stringify(body)).pipe(
      catchError((error) => {
        return Formatter.httpErrorFormatter(error);
      })
    );
  }

  patch(path: string, body = {}): Observable<any> {
    return this.http.patch(path, JSON.stringify(body)).pipe(
      catchError((error) => {
        return Formatter.httpErrorFormatter(error);
      })
    );
  }

  delete(path: string): Observable<any> {
    return this.http.delete(path).pipe(
      catchError((error) => {
        return Formatter.httpErrorFormatter(error);
      })
    );
  }
}
