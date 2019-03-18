import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MEAN';
  tasks: object = [];
  oneTask: object = [];
  newTask: any;
  editTask: any;
  constructor(private httpService: HttpService) {}

  ngOnInit() {
    // this.getTasksFromService();
    this.newTask = {title: "", description: ""};
    this.editTask = {title: "", description: ""};
  }

  getTasksFromService(){
    let observable = this.httpService.allTasks();
    observable.subscribe(data => {
      console.log("Got our data", data);
      this.tasks = data;
    });
  }
  getTask(id: any) {
    let observable = this.httpService.getTask(id);
    observable.subscribe(data => {
      console.log("got one data", data);
      this.editTask = data;
    })
  }
  createTask(){
    let observable = this.httpService.createTask(this.newTask);
    observable.subscribe(data => {
      console.log("got data from post back", data);
      this.newTask = {title: "", description: ""}
    });
  }
  deleteTask(id: any){
    let observable = this.httpService.deleteTask(id);
    observable.subscribe(data => console.log("data deleted", data));
    return this.tasks;
  }
  updateTask(id: any){
    let observable = this.httpService.updateTask(id, this.editTask);
    observable.subscribe(data => {
      console.log("Got the data", data);
      this.editTask = {title: "", description: ""}
    })
  }



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
