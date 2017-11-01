import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http'
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/observable'
import { environment } from '../environments/environment';

@Injectable()
export class UserService {
  isLoggedIn: Subject<boolean> = new Subject();
  loginUpdated: boolean = false;
  constructor(private http: Http) { }

  login(username: String, password: String) {
    let req = this.http.post(`${environment.backend_url}/login`, {username: username, password: password}, {withCredentials: true});
    req.subscribe(res => this.updateLogin(true), err => this.updateLogin(false));
    return req;
  }

  signup(username: String, password: String) {
    let req = this.http.post(`${environment.backend_url}/signup`,
          {username: username, password: password},
          {withCredentials: true})
    req.subscribe(res => this.updateLogin(true), err => this.updateLogin(false));
    return req;
  }

  logout() {
    let req = this.http.get(`${environment.backend_url}/logout`,
          {withCredentials: true})
    req.subscribe(res => this.updateLogin(false), err => this.updateLogin(false));
    return req;
  }

  updateLogin(isLoggedIn: boolean) : void {
    this.isLoggedIn.next(isLoggedIn);
    this.loginUpdated = true;
  }
}
