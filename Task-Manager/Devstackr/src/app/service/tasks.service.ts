import { Injectable } from "@angular/core";
import { Task } from "../models/task.model";
import { WebRequestsService } from "./web-requests.service";

@Injectable({
  providedIn: "root",
})
export class TasksService {
  constructor(private webRequestService: WebRequestsService) {}

  // createList(title: String) {
  //   return this.webRequestService.post("list", { title });
  // }

  getTasks(listId: String) {
    return this.webRequestService.get(`list/${listId}/tasks`);
  }
  createTask(title: String, listId: String) {
    return this.webRequestService.post(`list/${listId}/tasks`, { title });
  }

  complete(task: Task) {
    return this.webRequestService.patch(
      `list/${task._listid}/tasks/${task._id}`,
      {
        completed: !task.completed,
      }
    );
  }
}
