import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { environment } from '../environments/environment';

@Injectable()
export class PizzaService {

  constructor(private http: Http) { }

  getPizzas() {
    return this.http.get(`${environment.backend_url}/api/pizzas`, {withCredentials: true})
  }

}
