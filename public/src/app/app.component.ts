import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MEAN';
  cakes: object = [];
  newRating: any;
  oneCake: object = [];
  newCake: any;
  editCake: any;
  constructor(private httpService: HttpService) {}

  ngOnInit() {
    // this.getTasksFromService();
    this.newCake = {title: "", description: ""};
    this.editCake = {title: "", description: ""};
    this.newRating = {rating: "", comment: ""};
    this.getAllCakesFromService();

  }

  getAllCakesFromService(){
    let observable = this.httpService.allCakes();
    observable.subscribe(data => {
      console.log("Got our data", data);
      this.cakes = data;
    });
  }
  getCake(id: any) {
    let observable = this.httpService.getCakes(id);
    observable.subscribe(data => {
      // console.log("got one data", data);
      this.editCake = data;
    })
  }
  createCake(){
    let observable = this.httpService.createCakes(this.newCake);
    observable.subscribe(data => {
      console.log("got data from post back", data);
      this.getAllCakesFromService();
      this.newCake = {title: "", description: ""}
    });
  }
  deleteCake(id: any){
    let observable = this.httpService.deleteCakes(id);
    observable.subscribe(data => console.log("data deleted", data));
  }
  updateCakes(id: any){
      let observable = this.httpService.updateCakes(id, this.newRating);
      observable.subscribe(data => {
      console.log("Got the data", data);
      this.newRating = {title: "", description: ""}
    })
    // console.log("sam");
    // console.log(id);
    // console.log(this.newRating);
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
