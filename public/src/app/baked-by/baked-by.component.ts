import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-baked-by',
  templateUrl: './baked-by.component.html',
  styleUrls: ['./baked-by.component.css']
})
export class BakedByComponent implements OnInit {

  @Input() editCake: any;
  average: any = 0;
  sum: number = 0;
  constructor() { }

  ngOnInit() {
    // console.log(this.getTotalRating());
    for(let rating of this.editCake.ratings) {
      this.sum = this.sum + parseInt(rating.rating);
      console.log(rating.rating);
    }
    console.log("sum ", this.sum);
    console.log("lngth ", this.editCake.ratings.length);
    this.average = this.sum/this.editCake.ratings.length;
    console.log("avaerage ", this.average);
    console.log("lions");
    console.log(this.editCake);
  }
  // getTotalRating(){
  //   var sum = 0;
  //   // for(let rating of this.getCake.ratings) {
  //   //   // sum += rating.rating;
  //   //   console.log(rating.ratings);
  //   // }
  //   // var average = (sum / this.getCake.ratings.length);
  //   // return average;
  // }
  

}
