import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  authors: object = [];
  oneAuthor: object = [];
  newAuthor: any;
  editAuthor: any;
  router: any;
  constructor(private httpService: HttpService) {}

  ngOnInit() {
    // this.getTasksFromService();
    // this.newAuthor = {name: ""};
    // this.getAllAuthorsFromService();
    // console.log("lions",this.authors);

  }

  // getAllAuthorsFromService(){
  //   let observable = this.httpService.allAuthor();
  //   observable.subscribe(data => {
  //     console.log("Got our data", data);
  //     this.authors = data;
  //   });
  // }
  // getAuthor(id: any) {
  //   let observable = this.httpService.getAuthor(id);
  //   observable.subscribe(data => {
  //     // console.log("got one data", data);
  //     this.editAuthor = data;
  //   })
  // }
  // createAuthor(){
  //   let observable = this.httpService.createAuthor(this.newAuthor);
  //   observable.subscribe(data => {
  //     console.log("got data from post back", data);
  //     this.getAllAuthorsFromService();
  //     this.newAuthor = {title: "", description: ""}
  //   });
  // }
  // deleteAuthor(id: any){
  //   let observable = this.httpService.deleteAuthor(id);
  //   observable.subscribe(data => console.log("data deleted", data));
  // }
  // updateAuthors(id: any){
  //     let observable = this.httpService.updateAuthor(id, this.editAuthor);
  //     observable.subscribe(data => {
  //     console.log("Got the data", data);
  //     this.editAuthor = {title: "", description: ""}
  //   })
    // console.log("sam");
    // console.log(id);
    // console.log(this.newRating);
  // }



  // onButtonClickParam(num: Number): void { 
  //   console.log(`Click event is working with num param: ${num}`);
  // }
  // onButtonClickParams(num: Number, str: String): void { 
  //     console.log(`Click event is working with num param: ${num} and str param: ${str}`);
  // }
  // onButtonClickEvent(event: any): void { 
  //     console.log(`Click event is working with event: ${event}`);
  // }
}
