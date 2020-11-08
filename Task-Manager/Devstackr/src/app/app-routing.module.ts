import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { NewListComponent } from "./components/new-list/new-list.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "lists",
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
