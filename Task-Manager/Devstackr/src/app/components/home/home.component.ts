import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/service/tasks.service';
import { ListService } from 'src/app/service/list.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
