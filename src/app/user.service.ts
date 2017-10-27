import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  constructor() { }

  login(username: String, password: String) {
    console.log("logging in wow")
  }
}
