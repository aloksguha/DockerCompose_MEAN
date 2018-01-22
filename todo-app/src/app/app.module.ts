import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {TodoService} from './todo.service';
import {Todo} from './todo';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
