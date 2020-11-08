import { Component, OnInit } from "@angular/core";
import { TasksService } from "src/app/service/tasks.service";
import { ListService } from "src/app/service/list.service";
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private listService: ListService,
    private taskService: TasksService
  ) {}

  lists: any[];
  tasks: any[];
  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      console.log(params);
      this.taskService.getTasks(params.listId).subscribe((tasks: any[])=>{
        this.tasks = tasks;
        console.log('tasks: '+this.tasks)
      })
    });

    this.listService.getList().subscribe((lists: any[]) => {
      console.log(lists);
      this.lists = lists;
    });
  }
}
