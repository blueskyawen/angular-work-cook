import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  getAuthorizationToken() {
    return 'id85f5fe4caa565b00ab9891d6a7b1730a2359a';
  }
}
