/**
 * Created by liuxuwen on 19-1-30.
 */
import { Injectable } from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse} from '@angular/common/http';

import { finalize, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { MessageService } from '../message.service';

@Injectable()
export class LoggerInterceptor implements HttpInterceptor {

    constructor(private messageService : MessageService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('***LoggerInterceptor***');
        const started = Date.now();
        let ok: string;
        return next.handle(req)
            .pipe(
                tap(
                    event => ok = event instanceof HttpResponse ? 'succeeded' : '',
                    error => ok = 'failed'
                ),
                finalize(() => {
                    console.log('***LoggerInterceptor--complete***');
                    const elapsed = Date.now() - started;
                    const msg = `${req.method} "${req.urlWithParams}"
                        ${ok} in ${elapsed} ms.`;
                    this.messageService.add(msg);
                })
            );
    }
}