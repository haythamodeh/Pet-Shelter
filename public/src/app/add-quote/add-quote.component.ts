import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-add-quote',
  templateUrl: './add-quote.component.html',
  styleUrls: ['./add-quote.component.css']
})
export class AddQuoteComponent implements OnInit {
  authorForEdit: any = {
    name: String
  };
  authorQuote = {
    quote: "",
    vote: 0
  }
  errors: any = {
    quote: ""
  };

  constructor(private httpService: HttpService, private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    // this._route.params.subscribe((params: Params) => {
    //   this.getAuthor(params["id"]);
    // });
    // this.authorQuote = {quote: "", vote: 0};
  }

  // getAuthor(id: any) {
  //   let observable = this.httpService.getAuthor(id);
  //   observable.subscribe(data => {
  //     // console.log("got one data", data);
  //     this.authorForEdit = data;
  //   })
  // }

  // createQuote(id: string){
  //   this.httpService.createQuote(id, this.authorQuote)
  //     .subscribe(data => {
  //       if(data["errors"]){
  //         console.log(data);
  //         if(data["errors"]["quotes"]["errors"]["quote"]["message"])
  //           this.errors.quote = data["errors"]["quotes"]["errors"]["quote"]["message"];
  //       }
  //       else {
  //         this.authorQuote = {quote: "", vote: 0};
  //         this._router.navigate(["/viewQuote/",this.authorForEdit._id]);
  //       }
  //     })
  // }
  

}
