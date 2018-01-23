import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { EventsformComponent } from './components/eventsform/eventsform.component';
import { NewComponentComponent } from './components/new-component/new-component.component';

import { TodoComponent } from './components/todo/todo.component';
import { TodoDataService } from "./services/todo-data.service";
import { HttpClientModule } from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    EventsformComponent,
    NewComponentComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule
  ],
  providers: [TodoDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
