/**
 * Created by root on 1/30/19.
 */
import { Injectable } from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable()
export class ReplaceHttpsInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const secureReq = req.clone({
            url: req.url.replace('http://', 'https://')
        });
        console.log('***ReplaceHttpsInterceptor***');
        return next.handle(secureReq);
    }
}