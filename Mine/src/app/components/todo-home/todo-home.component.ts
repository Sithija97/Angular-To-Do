import { Component, OnInit } from '@angular/core';
import { Todo } from '../../interfaces/todo-interface';

@Component({
  selector: 'app-todo-home',
  templateUrl: './todo-home.component.html',
  styleUrls: ['./todo-home.component.scss']
})
export class TodoHomeComponent implements OnInit {

  todos : Todo[];
  todoTitle : String;
  todoId : number;

  constructor() { }

  ngOnInit() {

    this.todoId = 1;
    this.todoTitle = " ";

    this.todos = []
  }

  addToDo(): void {
    if(this.todoTitle.trim().length === 0) {
      return;
    }

    this.todos.push({
      'id': this.todoId,
      'title': this.todoTitle,
      'completed': false,
      'edited':false
    })

    this.todoTitle="";
    this.todoId++;
  }

  editToDo(todo: Todo): void {
    todo.edited = true; 
  }

  doneEdit(todo: Todo) {
    todo.edited = false; 
  }

  deleteToDo(id:number): void {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }
}
