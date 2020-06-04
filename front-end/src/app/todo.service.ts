import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from './interfaces/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  apiURL: string = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  getToDos(): any {
    return this.http.get(`${this.apiURL}/todo-items`)
  }

}

