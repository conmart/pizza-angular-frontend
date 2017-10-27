import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { UserService } from './user.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username: String = "";
  password: String = "";


  constructor(private userService: UserService) {}
  login(username: String, password: String) {
    console.log("logging in from app component")
    this.userService.login(this.username, this.password)
  }
}
