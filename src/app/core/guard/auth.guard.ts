import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,
    CanActivateChild, CanLoad, Route  } from '@angular/router';
import { Observable,Subject} from 'rxjs';
import { AuthService, AuthMsg } from '../auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad  {
  startUrls: string[] = [
    '/main/webcop/web-start/cards',
    '/main/webcop/web-start/cardsMore',
    '/main/webcop/web-start/no-right'
  ];
  constructor(public authService : AuthService,
              private router : Router) {}

  canActivate(next: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log('AuthGuard === canActivate');
    let url: string = state.url;
    console.log(url);
    if(this.startUrls.includes(url)) {
      let today = new Date();
      let curMonth = today.getMonth() + 1;
      let curDate = today.getDate();
      if(url === this.startUrls[0]) {
        if(curMonth > 7 || (curMonth == 7 && curDate > 21)) {
          return true;
        } else {
          this.router.navigate(['/main/webcop/web-start/no-right']);
          setTimeout(() => {
            this.authService.sendAuthText(new AuthMsg('start', `7月22日前无法访问COP-Start 列表 !`));
          },200);
          return false;
        }
      }
      if(url === this.startUrls[1]) {
        if(curMonth > 8 || (curMonth == 8 && curDate > 5)) {
          return true;
        } else {
          this.router.navigate(['/main/webcop/web-start/no-right']);
          setTimeout(() => {
            this.authService.sendAuthText(new AuthMsg('start', `8月6日前无法访问COP-Start 列表-进阶 !`));
          },200);
          return false;
        }
      }
      if(url === this.startUrls[2]) {
        return true;
      }
    } else {
      if (this.authService.curUser) {
        return true;
      } else {
        this.authService.redirectUrl = url;
        this.authService.sendAuthText(new AuthMsg('login', '无权访问，请先登录！'));
        return false;
      }
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
      this.authService.sendAuthText(new AuthMsg('login', '无权访问，请先登录！'));
      return false;
    }
  }
}

