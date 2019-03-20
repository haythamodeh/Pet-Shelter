import { NewAuthorComponent } from "./new-author/new-author.component";
import { HomeComponent } from "./home/home.component"
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditAuthorComponent } from './edit-author/edit-author.component';
const routes: Routes = [
  { path: "newAuthor", component: NewAuthorComponent},
  { path: "editAuthor/:id", component: EditAuthorComponent },
  { path: "", component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
