import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { List } from "src/app/models/list.model";
import { ListService } from "src/app/service/list.service";

@Component({
  selector: "app-new-list",
  templateUrl: "./new-list.component.html",
  styleUrls: ["./new-list.component.scss"],
})
export class NewListComponent implements OnInit {
  constructor(private listService: ListService, private router: Router) {}

  ngOnInit() {}

  createNewList(title: String) {
    this.listService.createList(title).subscribe((list: List) => {
      console.log(list);
      //navigate to /lists/list._id
      this.router.navigate(["lists/", list._id]);
    });
  }
}
