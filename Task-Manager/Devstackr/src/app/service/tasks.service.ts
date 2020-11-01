import { Injectable } from "@angular/core";
import { WebRequestsService } from "./web-requests.service";

@Injectable({
  providedIn: "root",
})
export class TasksService {
  constructor(private webRequestService: WebRequestsService) {}

  createList(title: String) {
    return this.webRequestService.post("list", { title });
  }
  
}
