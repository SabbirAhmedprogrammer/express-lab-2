import { Component, OnInit } from '@angular/core';
import { Todo } from '../interfaces/todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {


  toDosList: Todo[] = [];

  constructor(private service: TodoService) { }

  ngOnInit(): void {
    this.getToDos();
  }

  getToDos() {
    this.service.getToDos().subscribe((response) => {
      this.toDosList = response;
      console.log(this.toDosList);
    })
  }

}
