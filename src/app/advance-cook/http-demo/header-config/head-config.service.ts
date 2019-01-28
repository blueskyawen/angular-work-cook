import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

const configUrl = 'assets/config.json';

@Injectable()
export class HeadConfigService {

  constructor(private http : HttpClient) { }

  getConfig() {
    return this.http.get(configUrl);
  }
}
