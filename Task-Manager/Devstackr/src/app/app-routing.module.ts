import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { NewListComponent } from "./components/new-list/new-list.component";
import { NewTaskComponent } from './components/new-task/new-task.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "/lists",
    pathMatch: "full",
  },
  {
    path: "newlist",
    component: NewListComponent,
  },
  {
    path: "lists",
    component: HomeComponent,
  },
  {
    path: "lists/:listId",
    component: HomeComponent,
  },
  {
    path: "lists/:listId/newtask",
    component: NewTaskComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
