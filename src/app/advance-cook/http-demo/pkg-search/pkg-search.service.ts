import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,HttpErrorResponse } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { MessageService } from '../../../core/message.service';

export interface NpmPackageInfo {
  name: string;
  version: string;
  description: string;
}

export const searchUrl = 'https://npmsearch.com/query';
const httpOptions = {
  headers: new HttpHeaders({
    'x-refresh':  'true'
  })
};

function createHttpOptions(packageName: string, refresh = false) {
  // npm package name search api
  // e.g., http://npmsearch.com/query?q=dom'
  const params = new HttpParams({ fromObject: { q: packageName } });
  const headerMap = refresh ? {'x-refresh': 'true'} : {};
  const headers = new HttpHeaders(headerMap) ;
  return { headers, params };
}

@Injectable()
export class PkgSearchService {

  constructor(private http: HttpClient,private messageService : MessageService) { }

  search (packageName: string, refresh = false): Observable<NpmPackageInfo[]> {
    if (!packageName.trim()) {
      return of([]);
    }

    const options = createHttpOptions(packageName, refresh);
    return this.http.get(searchUrl, options).pipe(
        map((data: any) => {
          return data.results.map(entry => ({
                name: entry.name[0],
                version: entry.version[0],
                description: entry.description[0]
              } as NpmPackageInfo )
          );
        }),
        catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      this.log('An error occurred:'+ error.error.message);
    } else {
      this.log(
          `Backend returned code ${error.status}, ` +
          `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }

  private log(message: string) {
    this.messageService.add(`HeadConfigService: ${message}`);
  }

}
