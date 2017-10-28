import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../pizza.service'
@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {

  pizzas;
  constructor(private pizzaService: PizzaService) { }

  ngOnInit() {
    this.fetchPizzas();
  }

  fetchPizzas() {
    console.log("fetching pizzas");
    this.pizzaService.getPizzas().subscribe((response) => {
      this.pizzas = response.json();
    })
  }

}
