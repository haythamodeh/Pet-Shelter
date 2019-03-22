import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-view-quote',
  templateUrl: './view-quote.component.html',
  styleUrls: ['./view-quote.component.css']
})
export class ViewQuoteComponent implements OnInit {
  pets: object = [];
  petForEdit: any = {
    _id: String
  };
  count: number = 0;
  like_error: string;


  constructor(private httpService: HttpService, private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.getPet(params["id"]);
    });
  }

  getPet(id: any) {
    let observable = this.httpService.getPet(id);
    observable.subscribe(data => {
      // console.log("got one data", data);
      this.petForEdit = data;
      // console.log(this.petForEdit);
    })
  }

  getAllAuthorsFromService(){
    let observable = this.httpService.allPet();
    observable.subscribe(data => {
      this.pets = data;
    });
  }

  // deleteQuote(id: any, quoteid: any){
  //   this.httpService.deleteQuote(id, quoteid)
  //     .subscribe(data => {
  //       this.getAuthor(this.authorForEdit._id);
  //     });
  // }

  deletePet(id: any){
    this.httpService.deletePet(id)
      .subscribe(data => this._router.navigate(["/pets"]));
  }

  addRemoveVote(id: any, like: number) {
    // console.log(this.count);
    this.count++;
    if(this.count === 2){
      this.like_error = "Cant like it more than once!";
      return;
    }
    if(this.count < 2){
      this.httpService.addRemoveVote(id, like)
      .subscribe(data => this.getPet(this.petForEdit._id)); 
    }
    
  }

}
