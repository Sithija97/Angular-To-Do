import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-home',
  templateUrl: './todo-home.component.html',
  styleUrls: ['./todo-home.component.scss']
})
export class TodoHomeComponent implements OnInit {

  todos : object[];
  todoTitle : String;
  constructor() { }

  ngOnInit() {

    this.todoTitle = " ";

    this.todos = [
      {
        'title':'Learn mean'
      },
      {
        'title':'Learn mern'
      },
      {
        'title':'Do Meditation'
      }
    ]
  }

  addToDo() {
    this.todos.push({
      'title': this.todoTitle
    })
  }
}