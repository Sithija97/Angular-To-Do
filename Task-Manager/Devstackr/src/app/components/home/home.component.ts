import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/service/tasks.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private taskService: TasksService) { }

  ngOnInit() {
  }

  createNewList(title: String) {
    this.taskService.createList('Testing').subscribe((respose: any)=>{
      console.log(respose);
    })
  }

}
