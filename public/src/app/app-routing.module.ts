import { NewAuthorComponent } from "./new-author/new-author.component";
import { HomeComponent } from "./home/home.component"
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditAuthorComponent } from './edit-author/edit-author.component';
import { ViewQuoteComponent } from './view-quote/view-quote.component';
import { AddQuoteComponent } from './add-quote/add-quote.component';
const routes: Routes = [
  { path: "new", component: NewAuthorComponent},
  { path: "edit/pets/:id", component: EditAuthorComponent },
  { path: "pets/:id", component: ViewQuoteComponent },
  { path: "addQuote/:id", component: AddQuoteComponent },
  { path: "pets", component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
