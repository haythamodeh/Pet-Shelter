import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { NewAuthorComponent } from './new-author/new-author.component';
import { HomeComponent } from './home/home.component';
import { EditAuthorComponent } from './edit-author/edit-author.component';


@NgModule({
  declarations: [
    AppComponent,
    NewAuthorComponent,
    HomeComponent,
    EditAuthorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
