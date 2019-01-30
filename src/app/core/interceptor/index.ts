/**
 * Created by liuxuwen on 19-1-30.
 */
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { NoopInterceptor } from './noop-interceptor';
import { ReplaceHttpsInterceptor } from './replace-https-interceptor';
import { TrimNameInterceptor } from './trim-name-interceptor';
import { AuthInterceptor } from './auth-interceptor';
import { LoggerInterceptor } from './logger-interceptor';
import { CacheInterceptor } from './cache-interceptor';

export const httpInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: NoopInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ReplaceHttpsInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: TrimNameInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoggerInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: CacheInterceptor, multi: true }
];
