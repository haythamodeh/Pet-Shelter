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
  constructor(private httpService: HttpService) {}

  ngOnInit() {
    // this.getTasksFromService();
    this.newTask = {title: "", description: ""};
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
      this.oneTask = data;
    })
  }
  createTask(){
    let observable = this.httpService.createTask(this.newTask);
    observable.subscribe(data => {
      console.log("got data from post back", data);
      this.newTask = {title: "", description: ""}
    });
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
