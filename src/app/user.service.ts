import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http'
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/observable'

@Injectable()
export class UserService {
  isLoggedIn: Subject<boolean> = new Subject();
  loginUpdated: boolean = false;
  constructor(private http: Http) { }

  login(username: String, password: String) {
    let req = this.http.post("http://localhost:3000/login", {username: username, password: password}, {withCredentials: true});
    req.subscribe(res => this.updateLogin(true), err => this.updateLogin(false));
    return req;
  }

  signup(username: String, password: String) {
    let req = this.http.post("http://localhost:3000/signup",
          {username: username, password: password},
          {withCredentials: true})
    req.subscribe(res => this.updateLogin(true), err => this.updateLogin(false));
    return req;
  }

  logout() {
    let req = this.http.post("http://localhost:3000/logout", {},
          {withCredentials: true})
    req.subscribe(res => this.updateLogin(false), err => this.updateLogin(false));
    return req;
  }

  updateLogin(isLoggedIn: boolean) : void {
    this.isLoggedIn.next(isLoggedIn);
    this.loginUpdated = true;
  }
}
