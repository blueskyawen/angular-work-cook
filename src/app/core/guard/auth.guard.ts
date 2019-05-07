import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,
    CanActivateChild, CanLoad, Route  } from '@angular/router';
import { Observable,Subject} from 'rxjs';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad  {

  constructor(public authService : AuthService,
              private router : Router) {}

  canActivate(next: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log('AuthGuard === canActivate');
    let url: string = state.url;
    if (this.authService.curUser) {
      return true;
    } else {
      this.authService.redirectUrl = url;
      this.authService.sendAuthText('无权访问，请先登录！');
      return false;
    }
  }


  canActivateChild(route: ActivatedRouteSnapshot,
                   state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log('AuthGuard === canActivateChild');
    return this.canActivate(route,state);
  }

  canLoad(route: Route): boolean {
    console.log('AuthGuard === canLoad');
    let url : string = `/${route.path}`;

    if (this.authService.curUser) {
      return true;
    } else {
      this.authService.redirectUrl = '/main/advance/http/config';
      this.authService.sendAuthText('无权访问，请先登录！');
      return false;
    }
  }
}

