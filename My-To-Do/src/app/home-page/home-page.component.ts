import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  categories = [
    {title:'Personal', active:true},
    {title:'Work', active:false}
  ]

  constructor() { }

  ngOnInit() {
  }

  /* function of enable categories */
  openCategory(category) {
    this.markAllCategories(category);
    category.active = true;
  }

  /* mark all categories */
  markAllCategories(category) {
    this.categories.map((category)=>{
      category.active = false;
      return category;
    })
  }


}
