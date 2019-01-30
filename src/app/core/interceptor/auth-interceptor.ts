/**
 * Created by root on 1/30/19.
 */
import { Injectable } from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private authService : AuthService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('***AuthInterceptor***');
        const authToken = this.authService.getAuthorizationToken();
        const authReq = req.clone({ headers: req.headers.set('Authorization',authToken)});
        return next.handle(authReq);
    }
}
