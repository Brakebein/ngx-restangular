import { Injectable } from '@angular/core';
import { HttpBackend, HttpErrorResponse, HttpEvent, HttpRequest, HttpResponse } from '@angular/common/http';

import { catchError, filter, map, Observable, throwError } from 'rxjs';

import { RestangularHelper } from './ngx-restangular-helper';;

@Injectable()
export class RestangularHttp {

  constructor(public http: HttpBackend) {
  }

  createRequest(options): Observable<HttpEvent<any>> {
    const request = RestangularHelper.createRequest(options);

    return this.request(request);
  }

  request(request: HttpRequest<any>): Observable<HttpEvent<any>> {
    return this.http.handle(request)
    .pipe(
      filter(event => event instanceof HttpResponse),
      map((response: any) => {
        if (!response.ok) {
          return throwError(() => new HttpErrorResponse(response));
        }
        return response;
      }),
      map(response => {
        response.config = {params: request};
        return response;
      }),
      catchError(err => {
        err.request = request;
        err.data = err.error;
        err.repeatRequest = (newRequest?) => {
          return this.request(newRequest || request);
        };

        return throwError(() => err);
      })
    );
  }
}

