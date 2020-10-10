import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-home',
  templateUrl: './todo-home.component.html',
  styleUrls: ['./todo-home.component.scss']
})
export class TodoHomeComponent implements OnInit {

  todos : object[];
  todoTitle : String;
  todoId : number;

  constructor() { }

  ngOnInit() {

    this.todoId = 1;
    this.todoTitle = " ";

    this.todos = [
      {
        'id' : '',
        'title':''
      },
    ]
  }

  addToDo(): void {
    if(this.todoTitle.trim().length === 0) {
      return;
    }

    this.todos.push({
      'id': this.todoId,
      'title': this.todoTitle,
    })

    this.todoTitle="";
    this.todoId++;
  }
}