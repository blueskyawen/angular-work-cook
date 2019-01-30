/**
 * Created by liuxuwen on 19-1-30.
 */
import { Injectable } from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders, HttpResponse} from '@angular/common/http';

import { startWith, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { RequstCacheService } from '../requst-cache.service';

const searchUrl = 'https://npmsearch.com/query';

@Injectable()
export class CacheInterceptor implements HttpInterceptor {

    constructor(private requstCacheService : RequstCacheService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('***CacheInterceptor***');
        if (!this.isCachable(req)) {
            return next.handle(req);
        }

        const cachedResponse = this.requstCacheService.get(req);

        if (req.headers.get('x-refresh')) {
            const results$ = this.sendRequest(req, next, this.requstCacheService);
            return cachedResponse ?
                results$.pipe( startWith(cachedResponse) ) :
                results$;
        }

        return cachedResponse ? of(cachedResponse) : this.sendRequest(req, next, this.requstCacheService);
    }

    isCachable(req: HttpRequest<any>) {
        return req.method === 'GET' && (req.url.indexOf(searchUrl) > -1);
    }

    sendRequest(req: HttpRequest<any>,
                         next: HttpHandler,
                         cache: RequstCacheService): Observable<HttpEvent<any>> {
        const noHeaderReq = req.clone({ headers: new HttpHeaders() });
        return next.handle(noHeaderReq).pipe(
            tap(
                event => {
                    if (event instanceof HttpResponse) {
                        cache.put(req, event);
                    }
                }
            )
        );
    }
}
