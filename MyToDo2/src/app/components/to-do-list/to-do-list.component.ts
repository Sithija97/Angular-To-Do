import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {

  todoList: string[] = ['buy vegetables', 'finish paintings', 'study programming', 'play ludo',];

  constructor() { }

  ngOnInit() {
  }

}
