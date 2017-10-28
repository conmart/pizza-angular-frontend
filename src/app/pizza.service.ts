import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class PizzaService {

  constructor(private http: Http) { }

  getPizzas() {
    return this.http.get("http://localhost:3000/api/pizzas", {withCredentials: true})
  }

}
