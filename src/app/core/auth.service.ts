import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';

export class AuthMsg {
  message: string = '';
  type: string = '';
  constructor(type: string, msg: string) {
    this.type = type;
    this.message = msg;
  }
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  curUser : any;
  redirectUrl : string;
  authText$ = new Subject<AuthMsg>();

  constructor() { }

  getAuthorizationToken() {
    return 'id85f5fe4caa565b00ab9891d6a7b1730a2359a';
  }

  sendAuthText(authObj: AuthMsg) {
    this.authText$.next(authObj);
  }

  clearAuthText() {
    this.authText$.next();
  }

  getAuthText(): Observable<AuthMsg> {
    return this.authText$.asObservable();
  }

  registerUser(url,data): Observable<any> {
    let tmpUsers = [];
    if(window.localStorage.getItem('users')) {
      tmpUsers = JSON.parse(window.localStorage.getItem('users'));
    }
    data.isLogined = false;
    tmpUsers.push(data);
    window.localStorage.setItem('users',JSON.stringify(tmpUsers));
    return of({});
  }

  loginOnUser(user : any): Observable<boolean> {
    if(window.localStorage.getItem('users')) {
      let users = JSON.parse(window.localStorage.getItem('users'));
      let loginUser = users.find((item : any) => {
        return item.user === user.name && item.password === user.password;
      });
      if(loginUser) {
        loginUser.isLogined = true;
        window.localStorage.setItem('users',JSON.stringify(users));
        return of(true);
      } else {
        return of(false);
      }
    } else {
      return of(false);
    }
  }

  loginOffUser(): Observable<boolean> {
    if(window.localStorage.getItem('users')) {
      let users = JSON.parse(window.localStorage.getItem('users'));
      let loginUser = users.find((item : any) => {
        return item.user === this.curUser.name && item.password === this.curUser.password && item.isLogined;
      });
      if(loginUser) {
        loginUser.isLogined = false;
        window.localStorage.setItem('users',JSON.stringify(users));
      }
    }
    return of(true);
  }

  isLogined() {
    return this.curUser ? true : false;
  }
}
