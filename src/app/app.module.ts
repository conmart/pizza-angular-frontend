import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { PizzaComponent } from './pizza/pizza.component';
import { PizzaService } from './pizza.service'
import { UserService } from './user.service'

@NgModule({
  declarations: [
    AppComponent,
    PizzaComponent
  ],
  imports: [
    BrowserModule, HttpModule, FormsModule
  ],
  providers: [ PizzaService, UserService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
