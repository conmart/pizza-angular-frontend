import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { UserService } from './user.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  username: String = "";
  password: String = "";
  loggedIn: boolean = false;


  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.isLoggedIn.subscribe(answer => {
      this.loggedIn = answer;
    });
  }
  login() {
    this.userService.login(this.username, this.password);
  }

  signup() {
    this.userService.signup(this.username, this.password);
  }
  logout() {
    this.userService.logout();
  }
}
