import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse,HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { MessageService } from '../../../core/message.service';

import { Config } from './config';

const configUrl = 'assets/config.json';

@Injectable()
export class HeadConfigService {

  constructor(private http : HttpClient,private messageService: MessageService) { }

  private log(message: string) {
    this.messageService.add(`HeadConfigService: ${message}`);
  }


  getConfig() {
    return this.http.get(configUrl).pipe(
        tap(_ => this.log('getConfig from '+ configUrl)),
        catchError(this.handleError)
    );
  }

  getConfig_2() {
    return this.http.get<Config>(configUrl)
        .pipe(
        tap(_ => this.log('getConfig_2 from '+ configUrl)),
        catchError(this.handleError)
    );
  }

  getConfigWithResponse() : Observable<HttpResponse<Config>> {
    return this.http.get<Config>(configUrl,{observe:'response'})
      .pipe(
        tap(_ => this.log('getConfigWithResponse from '+ configUrl)),
        catchError(this.handleError)
    );
  }

  getConfigWithError() {
    return this.http.get('nut/config_2/url').pipe(
        tap(_ => this.log('getConfigWithError from assets/config_2.json')),
        catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      this.log('An error occurred:'+ error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      this.log(
          `Backend returned code ${error.status}, ` +
          `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }
}
