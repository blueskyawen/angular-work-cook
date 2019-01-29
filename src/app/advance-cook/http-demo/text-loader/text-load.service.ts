import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

import { MessageService } from '../../../core/message.service';

@Injectable()
export class TextLoadService {
  constructor(private http: HttpClient, private messageService: MessageService) {
  }

  getTextFile(url: string) {
    return this.http.get(url, {responseType: 'text'})
        .pipe(
          tap(data => this.log(url, data),
              error => this.logError(url, error)
          )
    );
  }

  private log(url: string, data: string) {
    const message = `TextLoadService downloaded "${url}" and got "${data}".`;
    this.messageService.add(message);
  }

  private logError(url: string, error: any) {
    const message = `TextLoadService failed to download "${url}"; got error "${error.message}".`;
    this.messageService.add(message);
  }
}
