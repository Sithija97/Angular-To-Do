import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Task } from "src/app/models/task.model";
import { TasksService } from "src/app/service/tasks.service";

@Component({
  selector: "app-new-task",
  templateUrl: "./new-task.component.html",
  styleUrls: ["./new-task.component.scss"],
})
export class NewTaskComponent implements OnInit {
  constructor(
    private taskService: TasksService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  listId: String;

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      // console.log('params: '+params)
      // console.log('list id: '+params.listId);
      //this.listId = params.listId;
      this.listId = params["listId"];
    });
  }

  createTask(title: String) {
    console.log("task title: " + title);
    console.log("list id: " + this.listId);
    this.taskService.createTask(title, this.listId).subscribe((task: Task) => {
      this.router.navigate(["../"], { relativeTo: this.route });
      //console.log('created task: '+ task);
    });
  }
}
