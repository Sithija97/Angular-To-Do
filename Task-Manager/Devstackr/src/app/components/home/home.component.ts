import { Component, OnInit } from "@angular/core";
import { TasksService } from "src/app/service/tasks.service";
import { ListService } from "src/app/service/list.service";
import { ActivatedRoute, Params } from "@angular/router";
import { Task } from "src/app/models/task.model";
import { List } from "src/app/models/list.model";

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

  lists: List[];
  tasks: Task[];

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      console.log(params);
      this.taskService.getTasks(params.listId).subscribe((tasks: Task[]) => {
        this.tasks = tasks;
        console.log("tasks: " + this.tasks);
      });
    });

    this.listService.getList().subscribe((lists: List[]) => {
      console.log(lists);
      this.lists = lists;
    });
  }

  onTaskClick(task: Task) {
    this.taskService.complete(task).subscribe(() => {
      console.log("Completed Successfully !");
      task.completed = !task.completed;
    });
  }
}
