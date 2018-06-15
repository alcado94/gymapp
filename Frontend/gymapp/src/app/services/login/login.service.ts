import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
// tslint:disable-next-line:import-blacklist
import { Observable, Subject } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';
import { toObservable } from '@angular/forms/src/validators';

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) { }

  login(loginForm) {
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

    const body = this.serializeObj(loginForm);

    return this.http.post('http://localhost:3000/auth', body, { headers: headers });
  }

  saveJwt(token) {
    localStorage.setItem('currentUser', token);
  }

  getRol() {
    return localStorage.getItem('tokenRol');
  }

  checkLogged(): boolean {
    return localStorage.getItem('currentUser') ? true : false;
  }

  private serializeObj(obj) {
    // tslint:disable-next-line:prefer-const
    let result = [];
    // tslint:disable-next-line:forin
    for (const property in obj) {
        result.push(encodeURIComponent(property) + '=' + encodeURIComponent(obj[property]));
    }

    return result.join('&');
  }

}
