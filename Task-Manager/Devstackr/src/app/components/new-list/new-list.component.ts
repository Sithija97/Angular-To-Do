import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/service/list.service';

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.scss']
})
export class NewListComponent implements OnInit {

  constructor(private listService: ListService) { }

  ngOnInit() {
  }
  
  createNewList(title: String) {
    this.listService.createList(title).subscribe((respose: any)=>{
      console.log(respose);
      //navigate to /lists/response._id
    })
  }
}
