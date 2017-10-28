import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http'

@Injectable()
export class UserService {
  constructor(private http: Http) { }

  login(username: String, password: String) {
    console.log("logging in wow", username, password)
    return this.http.post("http://localhost:3000/login", {username: username, password: password}, {headers: new Headers(["Content-Type: application/x-www-form-urlencoded"])})
  }
}
