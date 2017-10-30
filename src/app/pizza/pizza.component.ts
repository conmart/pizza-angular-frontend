import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../pizza.service'
import { Observable }        from 'rxjs/Observable';
import { UserService } from '../user.service';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {

  pizzas;
  errorMessage: String;
  constructor(private pizzaService: PizzaService, private userService: UserService) { }

  ngOnInit() {
    this.fetchPizzas();
    this.userService.isLoggedIn.subscribe(answer => {
      if (answer) {
        this.fetchPizzas();
      }
    })
  }

  fetchPizzas() {
    console.log("fetching pizzas");
    this.pizzaService.getPizzas().subscribe((response) => {
      this.errorMessage = "";
      this.pizzas = response.json();
    }, (err) => {
      this.errorMessage = err._body;
      this.pizzas = [];
    })
  }

}
