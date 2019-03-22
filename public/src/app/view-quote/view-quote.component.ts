import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-view-quote',
  templateUrl: './view-quote.component.html',
  styleUrls: ['./view-quote.component.css']
})
export class ViewQuoteComponent implements OnInit {
  authors: object = [];
  authorForEdit: any = {
    _id: String
  };


  constructor(private httpService: HttpService, private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.getAuthor(params["id"]);
    });
  }

  getAuthor(id: any) {
    let observable = this.httpService.getAuthor(id);
    observable.subscribe(data => {
      // console.log("got one data", data);
      this.authorForEdit = data;
    })
  }

  getAllAuthorsFromService(){
    let observable = this.httpService.allAuthor();
    observable.subscribe(data => {
      this.authors = data;
    });
  }

  deleteQuote(id: any, quoteid: any){
    this.httpService.deleteQuote(id, quoteid)
      .subscribe(data => {
        this.getAuthor(this.authorForEdit._id);
      });
  }

  addRemoveVote(id: any, quoteid: any, vote: number) {
    this.httpService.addRemoveVote(id, quoteid, vote)
      // .subscribe(data => console.log(data));
      .subscribe(data => this.getAuthor(this.authorForEdit._id));
  }

}
