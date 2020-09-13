import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  todoName : string;
  todos : object [] = [];

  constructor() { }

  ngOnInit() {
    this.todoName = "";
    this.todos = [
      {
        'id':1,
        'name': 'Study Angualr',
        'completed': false,
        'editing': false
      },
      {
        'id':2,
        'name': 'Do Painting',
        'completed': false,
        'editing': false
      },
      {
        'id':3,
        'name': 'Buy Vegetables',
        'completed': false,
        'editing': false
      }
    ]
  }

}
