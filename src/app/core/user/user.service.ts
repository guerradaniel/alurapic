import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { TokenService } from '../token/token.service';

import * as jtw_decode from 'jwt-decode'
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject = new BehaviorSubject<User>(null)

  constructor(
    private tokenService: TokenService
  ) {
    this.tokenService.hasToken() &&
      this.decodeAndNotify()
  }

  setToken(token: string) {
    this.tokenService.setToken(token)
    this.decodeAndNotify()
  }

  getUser() {
    return this.userSubject.asObservable();
  }

  private decodeAndNotify() {
    const token = this.tokenService.getToken() // setei o token
    const user = jtw_decode(token) as User; // peguei token salvo, pego o payload
    this.userSubject.next(user) // transformo para tipo User
  }

  logout() {
    this.tokenService.removeToken()
    this.userSubject.next(null)
  }
}